# Spike: B7P Brand Intelligence Wiki

**Validasi:** Apakah workflow Karpathy (raw → LLM-compile → wiki → Q&A) bisa jalan buat B7P?

## Struktur Final

```
b7p-wiki-spike/
├── README.md                          # File ini
├── raw/                               # 4 data sources ingested
│   ├── reviews/
│   │   ├── google_reviews.md          # 17 review ratings dari monitor
│   │   └── lemon8_review.md           # Food blogger review detail
│   ├── social/
│   │   └── social_mentions.md         # IG, TikTok, YT mentions
│   └── research/
│       └── brand_profile.md           # Fakta brand + kompetitor
├── wiki/                              # 6 artikel compiled oleh LLM
│   ├── index.md                       # Master index + stats
│   ├── insights/
│   │   ├── sentiment-analysis.md      # Rating distribution, theme, risk
│   │   └── product-moat.md            # Analisis moat & defensibility
│   ├── customers/
│   │   └── review-synthesis.md        # Quote board, segment, gaps
│   └── operations/
│       ├── brand-profile.md           # Fakta operasional
│       └── menu-analysis.md           # Price ladder, product portfolio
└── outputs/
    ├── qa_session_2026-05-31.md       # 4 strategic Q&A dengan sourcing
    ├── review_analytics.png           # Chart: pie + bar (dark theme)
    └── wiki_health_check.md           # Lint report + coverage gaps
```

## Verdict: VALIDATED ✅

### What worked

1. **Ingestion ✅** — Data B7P bisa diingest dari 3+ sources berbeda (Google Maps API, web scrape, social media search). Format markdown di `raw/` universal dan LLM-friendly.

2. **LLM Compilation ✅** — LLM sukses compile 4 raw files → 6 wiki articles yang saling terhubung dengan 28 backlinks. Artikel punya: synthesis (bukan cuma copy-paste), cross-referencing, dan flagging gaps.

3. **Q&A ✅** — 4 pertanyaan strategis dijawab dengan sourcing jelas ke artikel wiki. Jawaban grounded, bukan halusinasi. Trail audit: dari klaim → artikel → raw data.

4. **Output ✅** — Chart matplotlib generated, health check report, dan Q&A session file — semua viewable.

### What didn't

1. **Review text scraping ❌** — Google Maps Places API (yang dipakai monitor) gak kasih teks review. Hanya rating + timestamp. Butuh upgrade scraper.

2. **Matplotlib install friction ⚠️** — PEP 668 blocking, perlu venv. Di production harus pre-installed.

3. **ESB not integrated ❌** — Data penjualan belum masuk. Padahal ini yang bikin wiki dari "nice to have" jadi "critical ops tool."

### Surprises

- **Wiki compounding effect real:** Dari cuma 4 file raw + 17 review ratings, LLM bisa generate insight tentang moat, risk, dan strategic questions yang actionable. Ini baru sample 0.5% data B7P.
- **Wiki self-aware:** LLM auto-flag gaps yang perlu diisi ("missing review text", "no ESB data") — jadi roadmap isi sendiri.

### Recommendation for the real build

**Phase 1: Productionize (this week)**
1. Pindah dari `spikes/` ke repo dedicated: `b7p-wiki/`
2. Connect ESB ERP data pipe → `raw/sales/`
3. Upgrade review scraper ke full text
4. Cron job: daily compile + health check

**Phase 2: Scale (next 2 weeks)**
5. AGP mirror setup
6. Competitor tracking
7. Auto-Q&A briefing (e.g., "top 3 insights hari ini")
8. Obsidian vault view

**Phase 3: Karpathy Vision**
9. Search engine over wiki
10. Synthetic data generation
11. Fine-tuning consideration when wiki > 1000 articles

### Why this beats current workflow

| Current | Wiki Approach |
|---------|---------------|
| Data di mana-mana, ilang setelah 1x baca | Semua compounding di 1 tempat |
| Nanya ChatGPT = jawaban generic | Nanya wiki = jawaban grounded di data lo |
| Insight = lo harus mikir sendiri | LLM jadi analyst yang baca semua data |
| Brief manual per minggu | Auto-brief dari wiki |
| Gak ada audit trail | Setiap klaim bisa ditrace ke source |
