# B7P Wiki Health Check Report

*Auto-generated: 2026-06-23*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 23 files in `raw/` (21 sales + 2 non-sales)
- **Review sample:** 115 reviews tracked (+26 dari compile Jun 23) — 5★ 87.0% (100), 4★ 8.7% (10), 3★ 3.5% (4), 2★ 0.9% (1). 🟢 5★ naik +2.4pp — akselerasi terbesar sepanjang tracked history. 🟢 3★ stabil di 4 (3.5%) — 8 hari bersih. 🟢 Semua 115 review tracked punya nama. 8 duplikat (Euis Kurniasih, Andria Maulidia — Jun 21). 🆕 Jun 22: +2 review 5★ (Arira Shyfa, Malik Abdul Fatah). ⚠️ Jun 19 (Fri) & Jun 20 (Sat) sales missing. 🟡 Sunday Jun 21 Rp 61.9M — 17% di bawah avg.
- **Sales data:** 22 hari (May 31 – Jun 22). 🔴 **ANOMALI:** Rp 79.9M Selasa Jun 16 — 3.8× baseline Selasa. ⚠️ 2 hari missing (Jun 19-20). 🟡 Sunday dip Jun 21. 🆕 Monday Jun 22 Rp 22.1M — normal. 🟢 Kamis 3 data point: tren naik konsisten.

## Issues Found

### 🟢 Resolved (6)
1. **Monitoring gap — names:** ✅ Resolved. Semua 115 review tracked punya nama reviewer. Pipeline improvement confirmed.
2. **Jun 12 batch unnamed:** ✅ Names resolved via state file sync.
3. **3★ creep — RESOLVED:** 🟢 8 hari bersih sejak Al Boss (Jun 16). 3★ diluted ke 3.5% oleh 5★ baru. Tidak ada sinyal creep lanjutan.
4. **Kamis baseline confirmed:** 🟢 Thursday: 3 data point — Rp 20.3M → Rp 28.0M → Rp 30.9M (avg Rp 26.4M), tren naik konsisten.
5. **5★ acceleration:** 🟢 87.0% — 24 dari 26 review baru adalah 5★. Momentum makin kuat.
6. **Monday baseline strengthened:** 🆕 4 data point — Rp 68.8M (outlier/awal bulan) → Rp 29.2M → Rp 37.9M → Rp 22.1M. Normal range Rp 22-38M (exclude outlier).

### ⚠️ Warnings (10)
1. **🔴 ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa (Rp 20.8M, Rp 28.4M). Total bills: 411, AOV Rp 194K. Masih unresolved.
2. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Masih unresolved.
3. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 5 review) tanpa teks — gak bisa root cause analysis.
4. **⚠️ ESB INGEST GAP:** Jun 19 (Fri) & Jun 20 (Sat) tidak ada file sales. Ingest cron mungkin mati 2 hari atau ESB maintenance. Butuh investigasi.
5. **🟡 SUNDAY DIP:** Jun 21 Rp 61.9M — 17% di bawah Sunday avg (Rp 71.5M dari 4 data point). Sunday terendah tracked. Tapi tetap 2× weekday. Possible: event conflict di Bogor narik crowd dari B7P.
6. **🟡 KONTRADIKSI REVIEW vs SALES:** Jun 21: 15 review baru (semua 5★, record high) tapi sales Sunday terendah (Rp 61.9M). Interesting pattern — mungkin review dari pengunjung yang datang sebelum atau sesudah hari itu.
7. **index.md:** No source attribution line (acceptable untuk index)
8. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)
9. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
10. **Duplikat:** 8 kasus (Euis Kurniasih 2×, Andria Maulidia 2× — Jun 21). Total: Grace Sancaya, Patika Anggraini, Putri Devi Permatasari, Mela Astifa, Mutiara S, Rayhaan Imtiyaz, Euis Kurniasih, Andria Maulidia.

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia
- ✅ Semua 115 review tracked punya nama — pipeline improvement confirmed
- ✅ Review velocity positif: +26 baru di 5 hari (24× 5★, 1× 4★, +2 duplikat)
- ✅ 8 hari bersih tanpa 3★ atau 2★ baru

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Good | 22 hari data (May 31 – Jun 22). ⚠️ Jun 19-20 missing. 🔴 Jun 16 Selasa Rp 79.9M outlier besar. 🟡 Sunday Jun 21 Rp 61.9M — dip. Thursday: 3 data point tren naik (avg Rp 26.4M). Monday: 4 data point (avg Rp 39.5M, normal Rp 22-38M). Sunday: 4 data point (avg Rp 71.5M). Wednesday: 3 data point. Friday: 2 data point. Saturday: 2 data point. Weekend:weekday ~3-4:1. |
| Review text (2★ + 3★) | 🔴 Critical | 5 reviews (1× 2★ + 4× 3★) tanpa teks — gak tau root cause keluhan. 3★ diluted ke 3.5%. 8 hari bersih. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-22 (115 tracked) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-22 (22 days, 2-day gap) | 🟡 Active but gapped |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running. ⚠️ Investigasi kenapa Jun 19-20 missing.
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job daily scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup 8 review:** Remove or flag duplicate entries — low priority. Pertimbangkan dedup di pipeline scrape.
7. **🔴 Upgrade review monitor:** Pipeline gak capture teks review — 2★ + 3★ reviews (total 5) tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
8. **🔴 Investigasi anomali Jun 16:** Rp 79.9M di Selasa — cek apakah libur nasional, event spesial, atau billing error.
9. **🟡 Investigasi Sunday dip Jun 21:** Rp 61.9M — 17% di bawah avg. Cek apakah ada event di Bogor yang narik crowd. Monitor Sunday depan (Jun 28).
10. **🟡 Investigasi kontradiksi review vs sales Jun 21:** 15 review 5★ tapi sales rendah — possible time lag atau review dari pengunjung beda hari.
11. **⚠️ Investigasi ESB ingest gap Jun 19-20:** Cek log cron — apakah ESB offline atau cron error.
12. **🟢 Monday baseline now 4 data points:** Rp 68.8M (outlier) → Rp 29.2M → Rp 37.9M → Rp 22.1M. Normal weekday pattern confirmed.
