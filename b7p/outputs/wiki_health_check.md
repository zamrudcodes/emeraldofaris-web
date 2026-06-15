# B7P Wiki Health Check Report

*Auto-generated: 2026-06-16*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 19 files in `raw/` (16 sales + 3 non-sales)
- **Review sample:** 71 reviews tracked (+4 dari Jun 15) — 5★ 82% (58), 4★ 13% (9), 3★ 4% (3), 2★ 1% (1)
- **Sales data:** 16 hari (May 31 – Jun 15) — pola weekday/weekend terkonfirmasi ✅. ⚠️ Monday masih volatile: Rp 68.8M (Jun 1, outlier) → Rp 29.2M (Jun 8, normal) → Rp 37.9M (Jun 15). Tuesday baseline Rp 21-28M (2 data point). Wednesday baseline Rp 25-35M (2 data point). Thursday baseline: Rp 20.3M (Jun 4) → Rp 28.0M (Jun 11, +38% WoW). Friday baseline: Rp 27.6M (Jun 5) → Rp 28.8M (Jun 12, +4% WoW — konsisten). Saturday: Rp 51.8M (Jun 6) → Rp 65.5M (Jun 13, +26% WoW — 2 data point). Sunday: Rp 75.3M → Rp 77.6M → Rp 71.2M (3 data point, avg Rp 74.7M). ⚠️ 5★ turun 84%→82% — pertama kali dalam tracked history.

## Issues Found

### ⚠️ Warnings (9)
1. **🔴 5★ TURUN:** 84% → 82% (58/71) — pertama kali distribusi 5★ turun. Dipicu Tya Tami 3★ (Jun 15). Trend reversal signifikan.
2. **🔴 NEW 3★ — TYA TAMI (Jun 15):** Review 3★ ketiga. 3★ naik dari 3% ke 4%. Semua 3★ tanpa teks — root cause analysis impossible.
3. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Investigasi segera.
4. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 4 review) tanpa teks — gak bisa root cause analysis.
5. **Monitoring gap — names:** 🟢 Partially resolved — 12 dari 13 review baru (Jun 13 batch) ada nama. Pipeline improvement jalan.
6. **index.md:** No source attribution line (acceptable untuk index)
7. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)
8. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
9. **google_reviews.md:** Grace Sancaya (Jun 1, 2×), Patika Anggraini (Jun 13, 2×), Mutiara S (Jun 15, 2×) — 3 duplicate cases perlu dedup

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Resolved | 16 hari data — weekday/weekend pattern confirmed. ⚠️ Monday volatile (3 data point). Tuesday: Rp 20.8M (Jun 2), Rp 28.4M (Jun 9). Wednesday: Rp 24.7M (Jun 3), Rp 34.9M (Jun 10). Thursday: Rp 20.3M (Jun 4), Rp 28.0M (Jun 11). Friday: Rp 27.6M (Jun 5), Rp 28.8M (Jun 12) — konsisten. Saturday: Rp 51.8M (Jun 6), Rp 65.5M (Jun 13). Sunday: Rp 75.3M, Rp 77.6M, Rp 71.2M (avg Rp 74.7M, 3 data point). Monday: Rp 68.8M, Rp 29.2M, Rp 37.9M (3 data point, avg ~Rp 45.3M). Weekday baseline ~Rp 25-35M, weekend ~Rp 52-78M. |
| Review text (2★ + 3★) | 🔴 Critical | 4 reviews (1× 2★ + 3× 3★) tanpa teks — gak tau root cause keluhan. ⚠️ 5★ turun 84%→82%. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-16 (71 tracked, +4 Jun 15) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-15 (16 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job weekly scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup Grace Sancaya, Patika Anggraini & Mutiara S:** Remove or flag duplicate review entries (masing-masing 2x)
7. **🔴 Upgrade review monitor:** Pipeline saat ini gak capture nama + teks — 2★ dan 3★ reviews tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
