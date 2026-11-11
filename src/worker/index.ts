import { Hono } from 'hono'

type Env = {
  ASSETS: Fetcher
  /** Resend API key. Set it in Sites → Secrets as RESEND_API_KEY. */
  RESEND_API_KEY?: string
  /** Inbox that receives form submissions. Falls back to the address below. */
  CONTACT_TO?: string
  /** Verified sender. onboarding@resend.dev only delivers to the account owner. */
  CONTACT_FROM?: string
}

const DEFAULT_TO = 'ayushsingh9046@gmail.com'
const DEFAULT_FROM = 'Portfolio <onboarding@resend.dev>'

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Contact form. Sends the message to your inbox through Resend's HTTP API.
// The API key lives in Sites → Secrets; nothing secret is in this file.
app.post('/api/contact', async (c) => {
  const body = await c.req.json<{ name?: string; email?: string; message?: string }>().catch(() => ({}) as Record<string, string>)
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return c.json({ error: 'Enter a valid email address.' }, 400)
  if (!body.message?.trim()) return c.json({ error: 'Write a few words about the project.' }, 400)

  const apiKey = c.env.RESEND_API_KEY
  if (!apiKey) return c.json({ error: 'The form is not connected yet. Please email me directly instead.' }, 503)

  const name = (body.name ?? '').trim().slice(0, 120)
  const email = body.email.trim().slice(0, 200)
  const message = body.message.trim().slice(0, 5000)
  const to = c.env.CONTACT_TO ?? DEFAULT_TO

  let response: Response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: c.env.CONTACT_FROM ?? DEFAULT_FROM,
        // A bare address, not "Name <address>": Resend's test sender matches it
        // literally against the account owner's email.
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry from ${name || email}`,
        text: `${message}\n\n—\n${name || 'No name given'}\n${email}`,
      }),
    })
  } catch (error) {
    console.error('contact: could not reach Resend', error)
    return c.json({ error: 'Could not send right now. Please email me directly.' }, 502)
  }

  if (!response.ok) {
    console.error('contact: Resend rejected the message', response.status, await response.text())
    return c.json({ error: 'Could not send right now. Please email me directly.' }, 502)
  }

  return c.json({ ok: true })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
