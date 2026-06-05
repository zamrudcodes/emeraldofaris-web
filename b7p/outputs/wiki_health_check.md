# B7P Wiki Health Check Report

*Auto-generated: 2026-06-06*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 9 files in `raw/` (6 sales + 3 non-sales)
- **Review sample:** 39 reviews tracked (+3 new since Jun 5: Rifal Mhmd, Deni Muhammad rasyid, Salman Azhar — all 5★)
- **Sales data:** 6 hari (May 31 – Jun 5)

## Issues Found

### ⚠️ Warnings (4)
1. **index.md:** No source attribution line (tapi serve sebagai index, bukan content article — acceptable)
2. **review-synthesis.md:** "Source" ditulis "Source:" bukan "Sumber:" — inconsistency (minor)
3. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
4. **google_reviews.md:** Grace Sancaya duplicate entry (2 review identical di Jun 1) — perlu dedup

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟡 Medium | 6 hari data — hampir capai threshold analisis trend (butuh 1 hari lagi) |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Review text (3★) | 🟡 High | Gak tau root cause keluhan |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-05 (39 tracked) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-05 (6 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job weekly scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup Grace Sancaya:** Remove or flag duplicate review entry
