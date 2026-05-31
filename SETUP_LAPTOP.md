# B7P Wiki — Laptop Setup Guide

Buat Mas Aldo. Setup sekali, after that tinggal `git pull` + buka Obsidian.

## Prasyarat

- [ ] Git terinstall di laptop (Mac/Windows) — https://git-scm.com
- [ ] Obsidian terinstall — https://obsidian.md

## Step 1: Clone repo ke laptop

```bash
cd ~/Documents  # atau folder mana aja
git clone https://github.com/emeraldofaris/b7p-wiki.git
```

**Note:** Ini private repo. Pas pertama kali clone, GitHub bakal minta login.
- Username: `emeraldofaris`
- Password: Personal Access Token (bikin di https://github.com/settings/tokens)

Atau lebih bagus pake GitHub Desktop: https://desktop.github.com

## Step 2: Buka di Obsidian

1. Buka Obsidian
2. Klik "Open folder as vault"
3. Pilih folder `~/Documents/b7p-wiki`
4. Done.

## Step 3: Install plugin (opsional, rekomendasi)

### Wajib:
- **Obsidian Git** — auto-pull & auto-commit. Setting:
  - Auto pull interval: 30 menit
  - Auto push: off (VPS yang nge-push, laptop cuma pull)

### Bagus buat punya (dari Karpathy):
- **Marp Slides** — render markdown jadi slide deck (outputs/ bisa jadi presentasi)
- **Note Refactor** — extract teks jadi note baru

## Daily Workflow

Setelah setup:

```
Pagi:         Buka Obsidian → wiki udah ke-update (Obsidian Git auto-pull)
Siang/Sore:   Browse wiki, baca insights baru
Kalau penasaran: Chat gue (Tom) di Telegram → tanya apapun tentang B7P → gue jawab grounded ke wiki
```

**Lo GAK PERNAH perlu nulis/edit wiki sendiri** — itu kerjaan LLM di VPS. Tapi kalau lo browse dan nemu yang mau diedit/ditambahin, edit aja langsung di Obsidian. Next compile, gue incorporate perubahan lo.

## Yang terjadi di belakang layar

```
┌─────────────────────────────────────────────┐
│ VPS (Hermes)                                 │
│                                              │
│ 09:00 WIB — Cron job jalan:                  │
│   • Pull latest dari GitHub                  │
│   • Ingest raw data baru                     │
│   • LLM compile/update wiki                  │
│   • Health check                             │
│   • Git commit + push ──────────┐            │
│                                 │            │
└─────────────────────────────────┼────────────┘
                                  │
                    GitHub (private repo)
                                  │
┌─────────────────────────────────┼────────────┐
│ Laptop (Mas Aldo)               │            │
│                                 ▼            │
│ Obsidian Git auto-pull ───► Wiki terupdate   │
│ Buka Obsidian → baca, browse, search         │
└─────────────────────────────────────────────┘
```

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| "Authentication failed" pas clone | Pastiin token GitHub punya scope `repo`. Bikin baru kalau perlu. |
| Wiki gak ke-update | Manual `git pull` di terminal. Atau klik "Pull" di Obsidian Git. |
| Obsidian Git gak ke-install | Settings → Community plugins → Browse → "Obsidian Git" → Install |
