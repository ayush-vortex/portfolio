// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Ayush Singh',
  role: 'Data analyst and BCA student',
  location: 'Lucknow',
  timezone: 'Asia/Kolkata',
  email: 'ayushsingh9046@gmail.com',
  available: true,
  intro: 'I turn raw, messy data into dashboards people can act on: Python, Streamlit and a little AI. BCA student at Integral University, Lucknow.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ayush-vortex' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushsingh9046' },
  ],
  marquee: ['Python', 'Streamlit', 'Data cleaning', 'EDA', 'Chart.js', 'Supabase', 'Git & GitHub', 'Prompt engineering'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  gallery?: string[]
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'paiman-2',
    title: 'PAIMAN 2.0',
    client: 'Smart India Hackathon 2026',
    category: 'Risk dashboard',
    year: '2026',
    cover: '/images/paiman-cover.png',
    tint: '#e3e6f4',
    summary: 'An early-warning dashboard that turns cost, expenditure and timeline fields into a single overrun-risk score for infrastructure projects.',
    role: ['Data analysis', 'Dashboard build', 'AI insights'],
    deliverables: ['Risk score logic', 'Chart.js dashboard', 'Supabase schema', 'LLM insight panel'],
    link: 'https://paimanaiul.vercel.app/',
    gallery: ['/images/paiman-chart-1.png', '/images/paiman-chart-2.png'],
    body: [
      'PAIMAN 2.0 started with 1,775 real project records and one question: which of these is about to run over?',
      'With Team Tech Dudes I co-developed a web dashboard that takes the cost, expenditure and timeline fields the PAIMANA portal already collects and converts them into a Low / Medium / High overrun-risk score. I worked through the dataset in Python, generated a 0–100 efficiency score and a three-month risk percentage for every project, and flagged 13 as high risk.',
      'The dashboard is HTML, CSS and JavaScript with Chart.js, stores project data in Supabase (PostgreSQL), and uses the Groq LLM API to turn the numbers into a short natural-language summary. It qualified the university round of Smart India Hackathon 2026 under problem statement SIH26103.',
    ],
    size: 'large',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    client: 'Personal project',
    category: 'Streamlit app',
    year: '2025',
    cover: '/images/expense-tracker.svg',
    tint: '#efe6d9',
    summary: 'A Streamlit dashboard over a local SQLite database: filter by category and date, then read where the money went.',
    role: ['Data analysis', 'Dashboard build'],
    deliverables: ['Streamlit dashboard', 'SQLite schema', 'Command-line tools', 'Seed data script'],
    body: [
      'The first thing I built end to end: a Streamlit dashboard that reads every expense from a local SQLite database and lets you interrogate it.',
      'The sidebar drives the whole page, with a category multi-select and a date range. Above the charts sit three metrics: how many expenses, total spent in rupees, and the average per expense. Below them, spending by category, a daily trend line, and a payment-mode breakdown, with the filtered records in a table underneath.',
      'The data lives in one SQLite table created by the database module: date, category, amount, payment mode and description. Four small command-line scripts sit around the dashboard — log an expense, list them with totals, write matplotlib chart images, and seed a fresh database with 15 sample rows. Expenses can only be added from the terminal so far, which is the next thing to fix.',
    ],
    size: 'small',
  },
  {
    slug: 'multilingual-chatbot',
    title: 'Multilingual AI Chatbot',
    client: 'Smart India Hackathon 2025',
    category: 'Team lead',
    year: '2025',
    cover: '/images/chatbot.svg',
    tint: '#dfe7e3',
    summary: 'A six-member team and a chatbot that gets the same answer across languages.',
    role: ['Team lead', 'Coordination'],
    deliverables: ['Solution design', 'Task plan', 'Evaluator demo'],
    body: [
      'I led a six-member cross-functional team at Smart India Hackathon 2025, taking a multilingual AI chatbot from idea to evaluator demo.',
      'The job was less about code than sequencing: splitting work across UI/UX, frontend, backend and AI, keeping the pieces compatible, and making sure the demo told the story in five minutes. We ranked 16th out of more than 70 teams and were recognised at the university level.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Data analysis',
    body: 'Cleaning, exploring and making sense of CSVs and project records in Python: missing values, odd columns, and the unglamorous checks that decide whether a chart is honest.',
  },
  {
    title: 'Dashboards',
    body: 'Streamlit apps and JavaScript dashboards that put the answer at the top: one number, one chart, a short explanation underneath, then the detail for whoever wants it.',
  },
  {
    title: 'Data visualisation',
    body: 'Category breakdowns, trend lines and risk scores built with Chart.js and Streamlit, chosen so the shape of the data is obvious at a glance.',
  },
  {
    title: 'AI-assisted insight',
    body: 'Wiring an LLM to a real dataset through the Groq API: prompt design and guardrails so the summary describes the numbers instead of inventing them.',
  },
]

export const highlights = [
  {
    text: 'Qualified the university round of Smart India Hackathon 2026 with PAIMAN 2.0, a risk dashboard built on 1,775 real infrastructure records.',
    title: 'SIH 2026',
    meta: 'Team Tech Dudes · Problem statement SIH26103',
  },
  {
    text: 'Led six people across UI, frontend, backend and documentation, and ranked 16th out of more than 70 competing teams.',
    title: 'SIH 2025',
    meta: 'Multilingual AI chatbot',
  },
  {
    text: 'Finalist in the Prompt War competition, and an AI Data Analytics intern at InAmigos Foundation.',
    title: '2025 – 2026',
    meta: 'Binary Battalion · Integral University',
  },
]

export const experience = [
  { period: 'Aug – Sep 2026', title: 'AI Data Analytics Intern, InAmigos Foundation', detail: 'Two-week internship; certificate dated 17 September 2026' },
  { period: '2025 – 2028', title: 'BCA, Integral University, Lucknow', detail: 'Computer Applications' },
  { period: '2024', title: 'Class 12 (Arts), UP Board', detail: 'Sri S.B. Yadav Inter College' },
]
