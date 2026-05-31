# Emeraldo Faris Knowledge Base — Laptop Setup

## One-time setup

1. **Clone repo:**
```bash
git clone https://github.com/emeraldofaris/emeraldo-faris.git
```

2. **Buka di Obsidian:**
   - Buka Obsidian → "Open folder as vault"
   - Pilih folder `emeraldo-faris`

3. **Install plugin Obsidian Git** — auto-pull
   - Settings → Community plugins → Browse → "Obsidian Git"
   - Set auto-pull interval: 30 menit
   - Auto-push: OFF (VPS yang nge-push)

## Daily use

```
Pagi:  Buka Obsidian → semua udah fresh (auto-pulled)
Siang: Browse, search, baca insights baru
Kapan aja: Chat Tom di Telegram → tanya apapun → jawaban dari wiki
```

## You never write the wiki yourself
LLM (Hermes di VPS) handles everything:
- Ingest raw data
- Compile wiki articles with backlinks
- Health checks
- Git push

## Vault structure

```
emeraldo-faris/
├── b7p/         ← Bakso Tujuh Pemuda (live)
├── agp/         ← Ayam Goreng Pandawa (pre-launch)
├── mdi/         ← Marka Digital Indonesia
├── mgp/         ← Marka Group Partners
├── personal/    ← Books, learning, ideas
└── cross-context/ ← Cross-pollination insights
```
