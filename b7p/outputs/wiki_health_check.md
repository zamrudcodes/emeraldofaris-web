# B7P Wiki Health Check Report

*Auto-generated: 2026-06-17*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 19 files in `raw/` (17 sales + 2 non-sales)
- **Review sample:** 80 reviews tracked (+9 dari Jun 16 compile) — 5★ 82.5% (66), 4★ 11.2% (9), 3★ 5.0% (4), 2★ 1.2% (1)
- **Sales data:** 17 hari (May 31 – Jun 16) — pola weekday/weekend terkonfirmasi ✅. 🔴 **ANOMALI:** Rp 79.9M Selasa Jun 16 — 3.8× baseline Selasa. 3★ meningkat 3.8%→4%→5.0% (4 reviews). Monitoring nama reviewer confirmed working untuk Jun 12-16 batch. 6 duplikat reviews (+3 baru: Putri Devi Permatasari, Mela Astifa, Rayhaan Imtiyaz).

## Issues Found

### 🟢 Resolved (2)
1. **Monitoring gap — names:** ✅ Resolved. Semua 28 review Jun 12-16 batch punya nama reviewer. Pipeline improvement confirmed.
2. **Jun 12 batch unnamed:** ✅ Names resolved via state file sync.

### ⚠️ Warnings (10)
1. **🔴 ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa (Rp 20.8M, Rp 28.4M). Total bills: 411, AOV Rp 194K. Ini melebihi Sunday average Rp 74.7M. Investigasi: libur nasional? event? billing error?
2. **🔴 NEW 3★ — AL BOSS (Jun 16):** Review 3★ ke-4. 3★ sekarang 5.0% (4/80). Tren meningkat: 2 dari 4 review 3★ masuk dalam 2 hari.
3. **🔴 3★ CREEP:** 50% dari seluruh review 3★ tracked muncul dalam 30 hari terakhir — 2 dalam 2 hari terakhir (Tya Tami Jun 15, Al Boss Jun 16).
4. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Masih unresolved.
5. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 5 review) tanpa teks — gak bisa root cause analysis.
6. **index.md:** No source attribution line (acceptable untuk index)
7. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)
8. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
9. **Duplikat meningkat:** Grace Sancaya (2×), Patika Anggraini (2×), Putri Devi Permatasari (2×), Mela Astifa (2×), Mutiara S (2×), Rayhaan Imtiyaz (2×) — 6 kasus, +3 baru dari Jun 14-16.
10. **google_reviews.md:** 6 duplicate cases perlu dedup.

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia
- ✅ Semua review Jun 12-16 punya nama — pipeline improvement confirmed

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Good | 17 hari data — weekday/weekend pattern confirmed. 🔴 Jun 16 Selasa Rp 79.9M outlier besar. Monday 3 data point: Rp 29-69M (volatile). Tuesday 3 data point: Rp 20.8M → Rp 28.4M → Rp 79.9M (⚠️ exclude outlier). Wednesday: Rp 24.7M (Jun 3), Rp 34.9M (Jun 10). Thursday: Rp 20.3M (Jun 4), Rp 28.0M (Jun 11). Friday: Rp 27.6M (Jun 5), Rp 28.8M (Jun 12) — konsisten. Saturday: Rp 51.8M (Jun 6), Rp 65.5M (Jun 13). Sunday: 3 data point (avg Rp 74.7M). |
| Review text (2★ + 3★) | 🔴 Critical | 5 reviews (1× 2★ + 4× 3★) tanpa teks — gak tau root cause keluhan. 3★ sekarang 5.0% dan tren meningkat. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-17 (80 tracked, +9 from compile) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-16 (17 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job daily scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup 6 review:** Remove or flag duplicate entries (Grace Sancaya, Patika Anggraini, Putri Devi Permatasari, Mela Astifa, Mutiara S, Rayhaan Imtiyaz)
7. **🔴 Upgrade review monitor:** Pipeline gak capture teks review — 2★ + 3★ reviews (total 5) tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
8. **🔴 Investigasi anomali Jun 16:** Rp 79.9M di Selasa — cek apakah libur nasional, event spesial, atau billing error.
9. **⚠️ Monitor 3★ creep:** Setup alert kalau 3★ rate > 5% atau > 1 review 3★ baru dalam 7 hari.
