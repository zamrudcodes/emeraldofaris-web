# B7P Wiki Health Check Report

*Auto-generated: 2026-06-25*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 25 files in `raw/` (23 sales + 2 non-sales)
- **Review sample:** 112 reviews tracked (tidak ada review baru sejak Jun 23). 5★ 86.6% (97), 4★ 8.9% (10), 3★ 3.6% (4), 2★ 0.9% (1). 🟢 3★ stabil di 4 (3.6%) — 10 hari bersih. 🟢 Semua 112 review tracked punya nama. ⚠️ Dedup correction 115 → 112 (3 duplikat tambahan). ⚠️ Jun 19 (Fri) & Jun 20 (Sat) sales still missing. 🟡 Sunday Jun 21 Rp 61.9M — 17% di bawah avg. 🆕 Jun 24: +1 sales day (Rabu Rp 20.7M).
- **Sales data:** 24 hari (May 31 – Jun 24). 🔴 **ANOMALI:** Rp 79.9M Selasa Jun 16 — 3.8× baseline Selasa. ⚠️ 2 hari missing (Jun 19-20). 🟡 Sunday dip Jun 21. 🟢 Rabu Jun 24 Rp 20.7M — normal Wednesday, 140 bills, AOV Rp 148K. 🆕 Wednesday: 4 data point (Rp 24.7M, 34.9M, 22.6M, 20.7M; avg Rp 25.7M). Tuesday: 4 data point (Rp 20.8M, 28.4M, 79.9M⚠️, 23.8M).

## Issues Found

### 🟢 Resolved (7)
1. **Monitoring gap — names:** ✅ Resolved. Semua 112 review tracked punya nama reviewer. Pipeline improvement confirmed.
2. **Jun 12 batch unnamed:** ✅ Names resolved via state file sync.
3. **3★ creep — RESOLVED:** 🟢 10 hari bersih sejak Al Boss (Jun 16). 3★ stabil di 3.6%. Tidak ada sinyal creep lanjutan.
4. **Kamis baseline confirmed:** 🟢 Thursday: 3 data point — Rp 20.3M → Rp 28.0M → Rp 30.9M (avg Rp 26.4M), tren naik konsisten.
5. **5★ momentum maintained:** 🟢 86.6% — Tidak ada review baru Jun 24. After dedup correction, percentage stable.
6. **Tuesday baseline strengthened:** 🆕 4 data point — Rp 20.8M → Rp 28.4M → Rp 79.9M (⚠️) → Rp 23.8M. Normal range Rp 21-28M (exclude outlier).
7. **Wednesday baseline confirmed:** 🆕 4 data point — Rp 24.7M → Rp 34.9M → Rp 22.6M → Rp 20.7M (avg Rp 25.7M, range Rp 20.7-34.9M).

### ⚠️ Warnings (9)
1. **🔴 ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa (Rp 20.8M, Rp 28.4M). Total bills: 411, AOV Rp 194K. Masih unresolved.
2. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Masih unresolved.
3. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 5 review) tanpa teks — gak bisa root cause analysis.
4. **⚠️ ESB INGEST GAP:** Jun 19 (Fri) & Jun 20 (Sat) tidak ada file sales. Ingest cron mungkin mati 2 hari atau ESB maintenance. Butuh investigasi.
5. **🟡 SUNDAY DIP:** Jun 21 Rp 61.9M — 17% di bawah Sunday avg (Rp 71.5M dari 4 data point). Sunday terendah tracked. Tapi tetap 2× weekday. Possible: event conflict di Bogor narik crowd dari B7P.
6. **🟡 KONTRADIKSI REVIEW vs SALES:** Jun 21: 15 review baru (semua 5★, record high) tapi sales Sunday terendah (Rp 61.9M). Interesting pattern — mungkin review dari pengunjung yang datang sebelum atau sesudah hari itu.
7. **⚠️ DEDUP CORRECTION:** Review count turun 115 → 112. 3 duplikat tambahan teridentifikasi dengan metodologi (nama, rating, tanggal). Pipeline dedup perlu tightening.
8. **index.md:** No source attribution line (acceptable untuk index)
9. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia
- ✅ Semua 112 review tracked punya nama — pipeline improvement confirmed
- ✅ Review velocity: +5 baru Jun 23 (semua 5★)
- ✅ 10 hari bersih tanpa 3★ atau 2★ baru
- ✅ Tuesday baseline 4 data point — range Rp 21-28M terkonfirmasi
- ✅ Wednesday baseline 4 data point — range Rp 20.7-34.9M, avg Rp 25.7M

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Good | 24 hari data (May 31 – Jun 24). ⚠️ Jun 19-20 missing. 🔴 Jun 16 Selasa Rp 79.9M outlier besar. 🟡 Sunday Jun 21 Rp 61.9M — dip. 🆕 Wednesday: 4 data point (avg Rp 25.7M, range Rp 20.7-34.9M). Tuesday: 4 data point (normal Rp 21-28M, excl outlier). Thursday: 3 data point tren naik (avg Rp 26.4M). Monday: 4 data point (avg Rp 39.5M, normal Rp 22-38M). Sunday: 4 data point (avg Rp 71.5M). Friday & Saturday: 2 data point. Weekend:weekday ~3-4:1. |
| Review text (2★ + 3★) | 🔴 Critical | 5 reviews (1× 2★ + 4× 3★) tanpa teks — gak tau root cause keluhan. 3★ tetap 3.6%. 10 hari bersih. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-23 (112 tracked) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-24 (24 days, 2-day gap) | 🟡 Active but gapped |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running. ⚠️ Investigasi kenapa Jun 19-20 missing.
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job daily scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **🔴 Upgrade review monitor:** Pipeline gak capture teks review — 2★ + 3★ reviews (total 5) tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
7. **🔴 Investigasi anomali Jun 16:** Rp 79.9M di Selasa — cek apakah libur nasional, event spesial, atau billing error.
8. **🟡 Investigasi Sunday dip Jun 21:** Rp 61.9M — 17% di bawah avg. Cek apakah ada event di Bogor yang narik crowd. Monitor Sunday depan (Jun 28).
9. **🟡 Investigasi kontradiksi review vs sales Jun 21:** 15 review 5★ tapi sales rendah — possible time lag atau review dari pengunjung beda hari.
10. **⚠️ Investigasi ESB ingest gap Jun 19-20:** Cek log cron — apakah ESB offline atau cron error.
11. **⚠️ Dedup pipeline tightening:** 3 duplikat tambahan terdeteksi. Pertimbangkan dedup di pipeline scrape untuk mencegah overcounting.
12. **🟢 Tuesday baseline now 4 data points:** Rp 20.8M → Rp 28.4M → Rp 79.9M (⚠️) → Rp 23.8M. Normal weekday pattern confirmed.
