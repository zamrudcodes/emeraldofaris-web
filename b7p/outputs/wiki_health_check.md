# B7P Wiki Health Check Report

*Auto-generated: 2026-06-09*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 12 files in `raw/` (9 sales + 3 non-sales)
- **Review sample:** 47 reviews tracked (no new since Jun 7 — 3 days since last new review)
- **Sales data:** 9 hari (May 31 – Jun 8) — pola weekday/weekend terkonfirmasi ✅. Monday anomaly resolved: Jun 1 (Rp 68.8M) outlier dikonfirmasi oleh Jun 8 (Rp 29.2M normal). Monday baseline ~Rp 29M.

## Issues Found

### ⚠️ Warnings (5)
1. **index.md:** No source attribution line (tapi serve sebagai index, bukan content article — acceptable)
2. **review-synthesis.md:** "Source" ditulis "Source:" bukan "Sumber:" — inconsistency (minor)
3. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
4. **google_reviews.md:** Grace Sancaya duplicate entry (2 review identical di Jun 1) — perlu dedup
5. **4-star influx trend:** 3 dari 7 review baru adalah 4★ (Ayu Maharani, Ridwan, Mommy Lie). Distribusi 5★ turun 85% → 81%. Monitor — belum red flag tapi perhatikan kalau berlanjut.

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Resolved | 9 hari data — weekday/weekend pattern confirmed. Monday anomaly resolved. Now tracking Mon normal ~Rp 29M, Tue-Thu ~Rp 20-25M, Fri ~Rp 28M, Sat-Sun ~Rp 52-78M. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Review text (3★) | 🟡 High | Gak tau root cause keluhan |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-07 (47 tracked) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-08 (9 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job weekly scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup Grace Sancaya:** Remove or flag duplicate review entry
