# B7P Wiki Health Check Report

*Auto-generated: 2026-06-13*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 16 files in `raw/` (13 sales + 3 non-sales)
- **Review sample:** 52 reviews tracked (+5 dari batch Jun 12) — 5★ 81%, 4★ 14%, 3★ 4%, 2★ 2%
- **Sales data:** 13 hari (May 31 – Jun 12) — pola weekday/weekend terkonfirmasi ✅. Monday anomaly resolved: Jun 1 (Rp 68.8M) outlier dikonfirmasi oleh Jun 8 (Rp 29.2M normal). Tuesday baseline Rp 21-28M (2 data point). Wednesday baseline Rp 25-35M (2 data point). Thursday baseline: Rp 20.3M (Jun 4) → Rp 28.0M (Jun 11, +38% WoW). Friday baseline: Rp 27.6M (Jun 5) → Rp 28.8M (Jun 12, +4% WoW — konsisten). Saturday: Rp 51.8M (1 data point). Sunday: Rp 75-78M (2 data point).

## Issues Found

### ⚠️ Warnings (7)
1. **FIRST 2★ REVIEW:** 1 review 2★ terdeteksi di batch Jun 12 — nama & teks tidak tersedia. Investigasi segera. Rating distribution 5★ 81% → tetap stabil tapi ini first sub-3★ ever.
2. **Monitoring gap — no names:** 5 review baru dari state file tidak punya nama reviewer atau timestamp — pipeline perlu fix.
3. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 3 review) tanpa teks — gak bisa root cause analysis.
4. **index.md:** No source attribution line (tapi serve sebagai index, bukan content article — acceptable)
5. **review-synthesis.md:** "Source" ditulis "Source:" bukan "Sumber:" — inconsistency (minor)
6. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
7. **google_reviews.md:** Grace Sancaya duplicate entry (2 review identical di Jun 1) — perlu dedup

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Resolved | 13 hari data — weekday/weekend pattern confirmed. Monday anomaly resolved. Tuesday: Rp 20.8M (Jun 2), Rp 28.4M (Jun 9). Wednesday: Rp 24.7M (Jun 3), Rp 34.9M (Jun 10). Thursday: Rp 20.3M (Jun 4), Rp 28.0M (Jun 11). Friday: Rp 27.6M (Jun 5), Rp 28.8M (Jun 12) — konsisten. Saturday: Rp 51.8M (1 point). Sunday: Rp 75.3M, Rp 77.6M. Weekday baseline ~Rp 25-35M, weekend ~Rp 52-78M. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Review text (2★ + 3★) | 🔴 Critical | First 2★ + 2× 3★ tanpa teks — gak tau root cause keluhan |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-13 (52 tracked, +5 Jun 12 batch) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-12 (13 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job weekly scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup Grace Sancaya:** Remove or flag duplicate review entry
7. **🔴 Upgrade review monitor:** Pipeline saat ini gak capture nama + teks — 2★ dan 3★ reviews tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
