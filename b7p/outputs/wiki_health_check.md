# B7P Wiki Health Check Report

*Auto-generated: 2026-06-18*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 20 files in `raw/` (18 sales + 2 non-sales)
- **Review sample:** 89 reviews tracked (+9 dari Jun 18 compile) — 5★ 84.3% (75), 4★ 10.1% (9), 3★ 4.5% (4), 2★ 1.1% (1)
- **Sales data:** 18 hari (May 31 – Jun 17). 🔴 **ANOMALI:** Rp 79.9M Selasa Jun 16 — 3.8× baseline Selasa. 🟢 3★ stabil di 4 (4.5%) — pertama kali gak bertambah dalam 3 compile. 🟢 Semua review tracked punya nama. 6 duplikat (tidak bertambah).

## Issues Found

### 🟢 Resolved (3)
1. **Monitoring gap — names:** ✅ Resolved. Semua 89 review tracked punya nama reviewer. Pipeline improvement confirmed.
2. **Jun 12 batch unnamed:** ✅ Names resolved via state file sync.
3. **3★ creep — melambat:** 🟢 Tidak ada 3★ baru di Jun 17. 3★ stabil di 4 review (4.5%) — pertama kali dalam 3 compile berturut-turut.

### ⚠️ Warnings (8)
1. **🔴 ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa (Rp 20.8M, Rp 28.4M). Total bills: 411, AOV Rp 194K. ⏳ Masih unresolved — butuh data Jun 23 (Selasa depan) untuk konfirmasi.
2. **🔴 3★ CREEP (melambat):** 2 dari 4 review 3★ masuk dalam 30 hari terakhir (Tya Tami Jun 15, Al Boss Jun 16). Tapi tidak ada 3★ baru di Jun 17 — sinyal positif.
3. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Masih unresolved.
4. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 5 review) tanpa teks — gak bisa root cause analysis.
5. **index.md:** No source attribution line (acceptable untuk index)
6. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)
7. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
8. **Duplikat:** Grace Sancaya (2×), Patika Anggraini (2×), Putri Devi Permatasari (2×), Mela Astifa (2×), Mutiara S (2×), Rayhaan Imtiyaz (2×) — 6 kasus, tidak bertambah.

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia
- ✅ Semua review tracked punya nama — pipeline improvement confirmed
- ✅ Review velocity positif: +9 baru semua 5★ — hari yang solid

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Good | 18 hari data — weekday/weekend pattern confirmed. 🔴 Jun 16 Selasa Rp 79.9M outlier besar. Monday 3 data point: Rp 29-69M (volatile). Tuesday 3 data point: Rp 20.8M → Rp 28.4M → Rp 79.9M (⚠️ exclude outlier). Wednesday: 3 data point — Rp 24.7M → Rp 34.9M → Rp 22.6M (avg Rp 27.4M). Thursday: Rp 20.3M (Jun 4), Rp 28.0M (Jun 11). Friday: Rp 27.6M (Jun 5), Rp 28.8M (Jun 12) — konsisten. Saturday: Rp 51.8M (Jun 6), Rp 65.5M (Jun 13). Sunday: 3 data point (avg Rp 74.7M). |
| Review text (2★ + 3★) | 🔴 Critical | 5 reviews (1× 2★ + 4× 3★) tanpa teks — gak tau root cause keluhan. 3★ stabil di 4.5%. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-17 (89 tracked, +9 from compile) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-17 (18 days data) | 🟢 Growing |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job daily scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup 6 review:** Remove or flag duplicate entries — low priority (tidak bertambah)
7. **🔴 Upgrade review monitor:** Pipeline gak capture teks review — 2★ + 3★ reviews (total 5) tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
8. **🔴 Investigasi anomali Jun 16:** Rp 79.9M di Selasa — ⏳ butuh data Jun 23 untuk konfirmasi. Cek apakah libur nasional, event spesial, atau billing error.
9. **⚠️ Monitor 3★ creep:** Melambat — 0 baru di Jun 17. Tapi alert tetap aktif kalau 3★ rate naik lagi.