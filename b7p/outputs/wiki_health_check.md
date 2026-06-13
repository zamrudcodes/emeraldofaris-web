# B7P Wiki Health Check Report

*Auto-generated: 2026-06-14*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 17 files in `raw/` (14 sales + 3 non-sales)
- **Review sample:** 65 reviews tracked (+13 dari batch Jun 13) — 5★ 83% (54), 4★ 12% (8), 3★ 3% (2), 2★ 2% (1)
- **Sales data:** 14 hari (May 31 – Jun 13) — pola weekday/weekend terkonfirmasi ✅. Monday anomaly resolved: Jun 1 (Rp 68.8M) outlier dikonfirmasi oleh Jun 8 (Rp 29.2M normal). Tuesday baseline Rp 21-28M (2 data point). Wednesday baseline Rp 25-35M (2 data point). Thursday baseline: Rp 20.3M (Jun 4) → Rp 28.0M (Jun 11, +38% WoW). Friday baseline: Rp 27.6M (Jun 5) → Rp 28.8M (Jun 12, +4% WoW — konsisten). Saturday: Rp 51.8M (Jun 6) → Rp 65.5M (Jun 13, +26% WoW — 2 data point). Sunday: Rp 75-78M (2 data point).

## Issues Found

### ⚠️ Warnings (7)
1. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Investigasi segera. Rating distribution 5★ 83% → naik dari 81% karena 11/13 review baru 5★.
2. **Monitoring gap — no names:** 🟢 Partially resolved — 12 dari 13 review baru (Jun 13 batch) ada nama reviewer. Hanya 1 (Patika Anggraini entry ke-2, kemungkinan duplikat) yang questionable.
3. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 3 review) tanpa teks — gak bisa root cause analysis.
4. **index.md:** No source attribution line (tapi serve sebagai index, bukan content article — acceptable)
5. **review-synthesis.md:** "Source" ditulis "Source:" bukan "Sumber:" — inconsistency (minor)
6. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
7. **google_reviews.md:** Grace Sancaya (Jun 1) + Patika Anggraini (Jun 13) duplicate entries — perlu dedup

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Resolved | 14 hari data — weekday/weekend pattern confirmed. Monday anomaly resolved. Tuesday: Rp 20.8M (Jun 2), Rp 28.4M (Jun 9). Wednesday: Rp 24.7M (Jun 3), Rp 34.9M (Jun 10). Thursday: Rp 20.3M (Jun 4), Rp 28.0M (Jun 11). Friday: Rp 27.6M (Jun 5), Rp 28.8M (Jun 12) — konsisten. Saturday: Rp 51.8M (Jun 6), Rp 65.5M (Jun 13). Sunday: Rp 75.3M, Rp 77.6M. Weekday baseline ~Rp 25-35M, weekend ~Rp 52-78M. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Review text (2★ + 3★) | 🔴 Critical | First 2★ + 2× 3★ tanpa teks — gak tau root cause keluhan |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-14 (65 tracked, +13 Jun 13 batch) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-13 (14 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job weekly scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup Grace Sancaya & Patika Anggraini:** Remove or flag duplicate review entries (masing-masing 2x)
7. **🔴 Upgrade review monitor:** Pipeline saat ini gak capture nama + teks — 2★ dan 3★ reviews tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
