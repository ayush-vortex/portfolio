# Expense Tracker

A personal expense tracker built with Python and Streamlit. Log what you spend, then explore it in a dashboard: spending by category, payment-mode breakdown, a daily trend, headline totals, and the filtered raw records — all read from a local SQLite database.

> There is no hosted demo link in this repository. Run it locally with the steps below.

## Features

**Dashboard** (`app.py`)

- Sidebar filters: multi-select categories and a date range, both applied to every number and chart on the page.
- Three headline metrics: number of expenses, total spent (₹), and average per expense for the current selection.
- Spending by category, sorted largest first.
- Daily spending trend over the selected range.
- Payment-mode breakdown (UPI / Cash / Card).
- The filtered records in a sortable table, newest first.

**Command line tools**

| Script | What it does |
| --- | --- |
| `add_expanse.py` | Prompts for date (Enter = today), category, amount, payment mode and description, then inserts the row. |
| `view_expenses.py` | Prints every expense, the total count and the total amount. |
| `analysis.py` | Prints category and payment-mode totals plus the single largest expense, and saves `category_spending.png` and `daily_trend.png` using matplotlib. |
| `seed_data.py` | Inserts 15 random sample expenses spread over the last 45 days. |

## Tech stack

- Python 3 (developed against 3.10+, standard library `sqlite3`)
- [Streamlit](https://streamlit.io) — dashboard UI
- [pandas](https://pandas.pydata.org) — reading SQLite into DataFrames, grouping
- [matplotlib](https://matplotlib.org) — the PNG charts written by `analysis.py`
- SQLite — single-file storage, no server required

## Project structure

```
app.py             Streamlit dashboard (filters, metrics, charts, table)
add_expanse.py     CLI: add one expense
view_expenses.py   CLI: list everything with totals
analysis.py        CLI: summaries + saves two PNG charts
database.py        SQLite connection helper and create_table()
seed_data.py       Inserts 15 sample rows for a fresh database
expenses.db        The SQLite database (contains sample data)
category_spending.png, daily_trend.png   Chart output from analysis.py
```

## Quick start

```sh
git clone https://github.com/ayush-vortex/expanse-trcker.git
cd "expanse track"

python -m venv .venv
# Windows (Git Bash):      source .venv/Scripts/activate
# macOS / Linux:           source .venv/bin/activate

pip install streamlit pandas matplotlib

python database.py     # creates expenses.db and the expenses table
python seed_data.py    # optional: 15 sample rows so the charts have something to show
streamlit run app.py
```

The dashboard opens at <http://localhost:8501>.

> This repo has no `requirements.txt` or `pyproject.toml` yet — the `pip install` line above is the complete dependency list. Adding one is the first item in the roadmap below.

## Data model

One table, `expenses`:

| Column | Type | Notes |
| --- | --- | --- |
| `id` | INTEGER | Primary key, autoincrement |
| `date` | TEXT | ISO `YYYY-MM-DD`; parsed to datetime for filtering and charts |
| `category` | TEXT | e.g. Food, Travel, Bills, Shopping, Entertainment, Groceries |
| `amount` | REAL | Stored in rupees |
| `payment_mode` | TEXT | UPI, Cash or Card |
| `description` | TEXT | Optional free text |

## Using it day to day

```sh
python add_expanse.py    # log an expense
python view_expenses.py  # check what you have
python analysis.py       # print summaries and write the two PNG charts
streamlit run app.py     # open the dashboard
```

## Known limitations

- Expenses can only be added from the command line; the dashboard is read-only.
- Currency is hard-coded to ₹ in the metric labels and chart axes.
- `expenses.db` is committed with sample data, so a fresh clone starts with rows you did not enter. Consider ignoring the file or adding a `--fresh` flag.
- The folder name `expanse track` contains a space and a typo; renaming it to `app/` simplifies every command and any future deployment.
- `add_expanse.py` calls `float()` on the amount directly, so a non-numeric entry raises instead of re-prompting.
- No tests or CI yet.

## Roadmap

- [ ] `requirements.txt` with pinned versions
- [ ] Add and edit expenses from the dashboard itself
- [ ] Monthly budget per category and an over-budget warning
- [ ] CSV/Excel export
- [ ] Rename and standardise the folder and repo name (`expense-tracker`)

## Author

**Ayush Singh** — BCA student, aspiring data analyst

- GitHub: [@ayush-vortex](https://github.com/ayush-vortex)
- LinkedIn: [ayushsingh9046](https://www.linkedin.com/in/ayushsingh9046)
