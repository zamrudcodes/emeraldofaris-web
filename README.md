# Emeraldo Faris — Personal Knowledge Base

*Monorepo knowledge base. One vault, six contexts. LLM-compiled, Obsidian-viewed.*

## 🧭 Contexts

| Context                           | Path             | Status        | What's Inside                                   |
| --------------------------------- | ---------------- | ------------- | ----------------------------------------------- |
| **B7P** — Bakso Tujuh Pemuda      | `[[b7p/index]]`  | 🟢 Live       | Reviews, daily sales, sentiment, moat analysis  |
| **AGP** — Ayam Goreng Pandawa     | `agp/`           | 🟡 Pre-launch | Market research, strategy, competitor tracking  |
| **MDI** — Marka Digital Indonesia | `mdi/`           | ⬜ Setup       | Client briefs, pitch decks, agency playbook     |
| **MGP** — Marka Growth Partners   | `mgp/`           | ⬜ Setup       | Holding strategy, portfolio, synergies          |
| **Personal**                      | `personal/`      | ⬜ Setup       | Books, Islamic learning, ideas, notes           |
| **Cross-Context**                 | `cross-context/` | ⬜ Setup       | F&B patterns, MDI→TPR synergies, macro insights |

## 🔧 Automation

| Cron | Schedule (WIB) | Job |
|------|----------------|-----|
| B7P Sales Ingest | 00:00 | Pull daily sales from ESB ERP |
| B7P Wiki Compile | 09:00 | Ingest new data → compile wiki → health check |

## 🖥️ How To Use

1. Clone: `git clone https://github.com/emeraldofaris/emeraldo-faris.git`
2. Open in Obsidian as vault
3. Install Obsidian Git plugin (auto-pull)
4. Done. LLM maintains everything. You just read and ask.

> **"You rarely ever write or edit the wiki manually — it's the domain of the LLM."** — Andrej Karpathy

---

*Last compiled: 2026-05-31*
