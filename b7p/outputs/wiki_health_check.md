# B7P Wiki Health Check Report

*Auto-generated: 2026-06-22*

## Wiki Stats
- **Articles:** 6
- **Total backlinks:** 30+ cross-references antar artikel
- **Raw data sources:** 22 files in `raw/` (20 sales + 2 non-sales)
- **Review sample:** 113 reviews tracked (+24 dari compile Jun 22) — 5★ 86.7% (98), 4★ 8.8% (10), 3★ 3.5% (4), 2★ 0.9% (1). 🟢 5★ naik +2.1pp — akselerasi terbesar sepanjang tracked history. 🟢 3★ stabil di 4 (3.5%) — 6 hari bersih. 🟢 Semua 113 review tracked punya nama. 8 duplikat (+2 baru: Euis Kurniasih, Andria Maulidia). ⚠️ Jun 19 (Fri) & Jun 20 (Sat) sales missing. 🟡 Sunday Jun 21 Rp 61.9M — 17% di bawah avg.
- **Sales data:** 20 hari (May 31 – Jun 21). 🔴 **ANOMALI:** Rp 79.9M Selasa Jun 16 — 3.8× baseline Selasa. ⚠️ 2 hari missing (Jun 19-20). 🟡 Sunday dip Jun 21. 🟢 Kamis 3 data point: tren naik konsisten.

## Issues Found

### 🟢 Resolved (5)
1. **Monitoring gap — names:** ✅ Resolved. Semua 113 review tracked punya nama reviewer. Pipeline improvement confirmed.
2. **Jun 12 batch unnamed:** ✅ Names resolved via state file sync.
3. **3★ creep — RESOLVED:** 🟢 6 hari bersih sejak Al Boss (Jun 16). 3★ diluted ke 3.5% oleh 5★ baru. Tidak ada sinyal creep lanjutan.
4. **Kamis baseline confirmed:** 🟢 Thursday: 3 data point — Rp 20.3M → Rp 28.0M → Rp 30.9M (avg Rp 26.4M), tren naik konsisten.
5. **5★ acceleration:** 🟢 86.7% — 22 dari 24 review baru adalah 5★. Momentum makin kuat.

### ⚠️ Warnings (10)
1. **🔴 ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa (Rp 20.8M, Rp 28.4M). Total bills: 411, AOV Rp 194K. ⏳ Masih unresolved — butuh data Jun 23 (Selasa depan) untuk konfirmasi.
2. **FIRST 2★ REVIEW:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia. Masih unresolved.
3. **Monitoring gap — no texts:** Semua review 2★ dan 3★ (total 5 review) tanpa teks — gak bisa root cause analysis.
4. **⚠️ ESB INGEST GAP:** Jun 19 (Fri) & Jun 20 (Sat) tidak ada file sales. Ingest cron mungkin mati 2 hari atau ESB maintenance. Butuh investigasi.
5. **🟡 SUNDAY DIP:** Jun 21 Rp 61.9M — 17% di bawah Sunday avg (Rp 74.7M dari 3 data point). Sunday terendah tracked. Tapi tetap 2× weekday. Possible: event conflict di Bogor narik crowd dari B7P.
6. **🟡 KONTRADIKSI REVIEW vs SALES:** Jun 21: 15 review baru (semua 5★, record high) tapi sales Sunday terendah (Rp 61.9M). Interesting pattern — mungkin review dari pengunjung yang datang sebelum atau sesudah hari itu.
7. **index.md:** No source attribution line (acceptable untuk index)
8. **review-synthesis.md:** "Source" ditulis bukan "Sumber:" — inconsistency (minor)
9. **menu-analysis.md:** Pricing "Tabso" dan "Mie Ayam" marked as "?" — missing data
10. **Duplikat:** 8 kasus (+2 baru Jun 21: Euis Kurniasih 2×, Andria Maulidia 2×). Total: Grace Sancaya, Patika Anggraini, Putri Devi Permatasari, Mela Astifa, Mutiara S, Rayhaan Imtiyaz, Euis Kurniasih, Andria Maulidia.

### 🟢 Passed Checks
- ✅ Semua artikel punya backlinks ke artikel lain
- ✅ Semua artikel konten substantif (>200 words)
- ✅ Semua artikel cross-reference raw data sources
- ✅ No broken backlinks
- ✅ Master index tersedia
- ✅ Semua 113 review tracked punya nama — pipeline improvement confirmed
- ✅ Review velocity positif: +24 baru di 4 hari (22× 5★, 1× 4★, +2 duplikat)
- ✅ 6 hari bersih tanpa 3★ atau 2★ baru

## Coverage Gaps (5)

| Gap | Severity | Impact |
|-----|----------|--------|
| ESB sales data | 🟢 Good | 20 hari data (May 31 – Jun 21). ⚠️ Jun 19-20 missing. 🔴 Jun 16 Selasa Rp 79.9M outlier besar. 🟡 Sunday Jun 21 Rp 61.9M — dip. Thursday: 3 data point tren naik (avg Rp 26.4M). Sunday: 4 data point (avg Rp 71.5M). Wednesday: 3 data point. Friday: 2 data point. Saturday: 2 data point. Weekend:weekday ~3-4:1. |
| Review text (2★ + 3★) | 🔴 Critical | 5 reviews (1× 2★ + 4× 3★) tanpa teks — gak tau root cause keluhan. 3★ diluted ke 3.5%. 6 hari bersih. |
| AGP monitoring | 🔴 Critical | Brand baru, 0 data |
| Competitor profiles | 🟡 High | Gak bisa analisis competitive positioning |
| Financial data | 🟡 Medium | Gak bisa analisis unit economics |

## Data Freshness

| Source | Last Updated | Fresh? |
|--------|-------------|--------|
| Google Reviews | 2026-06-21 (113 tracked) | 🟢 Fresh |
| Social mentions | ~2025-2026 | 🟡 Mixed |
| Brand profile | 2026-05-31 (compiled) | 🟢 Fresh |
| ESB Sales | 2026-06-21 (20 days, 2-day gap) | 🟡 Active but gapped |

## Lint Recommendations

1. **Auto-ingest ESB:** Cron job daily pull sales data ke `raw/sales/` — ✅ running. ⚠️ Investigasi kenapa Jun 19-20 missing.
2. **Auto-fill pricing gaps:** Query ESB untuk harga aktual menu
3. **Standardize source format:** Semua artikel pakai format "Source: [[raw/...]]"
4. **Auto-health-check:** Cron job daily scan untuk broken links, stale data, coverage gaps
5. **AGP mirror:** Clone struktur ini untuk Ayam Goreng Pandawa
6. **Dedup 8 review:** Remove or flag duplicate entries — low priority (+2 baru Jun 21). Pertimbangkan dedup di pipeline scrape.
7. **🔴 Upgrade review monitor:** Pipeline gak capture teks review — 2★ + 3★ reviews (total 5) tanpa konteks sangat berbahaya. Butuh scraper yang bisa ambil teks lengkap.
8. **🔴 Investigasi anomali Jun 16:** Rp 79.9M di Selasa — ⏳ butuh data Jun 23 untuk konfirmasi. Cek apakah libur nasional, event spesial, atau billing error.
9. **🟡 Investigasi Sunday dip Jun 21:** Rp 61.9M — 17% di bawah avg. Cek apakah ada event di Bogor yang narik crowd. Monitor Sunday depan (Jun 28).
10. **🟡 Investigasi kontradiksi review vs sales Jun 21:** 15 review 5★ tapi sales rendah — possible time lag atau review dari pengunjung beda hari.
11. **⚠️ Investigasi ESB ingest gap Jun 19-20:** Cek log cron f7b8e727a098 — apakah ESB offline atau cron error.
