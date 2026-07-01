# Sentiment Analysis — B7P Review Sentiment

*Compiled from: [[raw/reviews/google_reviews]], [[raw/reviews/lemon8_review]], [[raw/social/social_mentions]]*
*Backlinks: [[index]], [[customers/review-synthesis]], [[insights/product-moat]]*
*Last updated: 2026-07-02*

---

## Overall Sentiment: Strongly Positive (4.7★ baseline)

### Rating Distribution (tracked: 140 unik dari 149 raw, 9 duplikat — ~4.5% dari ~3,135+ reviews)

```
5★ ████████████████████████████████    87.1%
4★ ████                                 7.9%
3★ ██                                   3.6%
2★                                      0.7%
1★                                      0.7%
```

⚠️ **Dedup correction (Jul 2):** Review count dikoreksi 149 → 140. 9 duplikat teridentifikasi via triple-key dedup (nama, rating, tanggal). 5★: 87.9%→87.1%.

### Positive Themes (disebut di 3+ sumber)

| Theme | Frequency | Sample Evidence |
|-------|-----------|----------------|
| Tetelan goreng enak & unik | 8+ mentions | "Crispy luar, juicy dalam", "wajib cobain" |
| Daging bakso padat | 5+ mentions | "Padat dan berasa daging", "bukan tepung" |
| Harga terjangkau | 5+ mentions | "Mulai 16K", "worth the price banget" |
| Kuah gurih & panas | 4+ mentions | "Kuah panas = selling point", "garansi kuah panas" |
| Pelayanan ramah & cepat | 3+ mentions | "Stafnya ramah", "pelayanan cepat" |

### Negative / Risk Signals

| Signal | Evidence | Severity |
|--------|----------|----------|
| 🔴 **FIRST-EVER 1★ review** | 1 review 1★ dari 149 — raudhah hayati (Jun 28) | **CRITICAL** — tanpa preseden, investigasi segera |
| 🔴 **First 2★ review** | 1 review 2★ dari 149 — Andi Mohamadyusuf (Jun 12) | **High** — investigasi, teks tidak tersedia |
| 🔴 **3★ streak BROKEN** | Mochammad Fajar (Jun 28) — streak 14 hari bersih berakhir. 3★ tetap 5 review (3.6% deduped) | **High** — monitor 48-72 jam ke depan, kalau ada 3★ lagi dalam 2 hari → flag eskalasi |
| Harga Rp 39K untuk street food | Bisa jadi resistance | **Low-Medium** — offset oleh value perception |
| "Pedagang kaki lima" positioning | Lemon8 mention | **Low** — bisa jadi authenticity advantage |
| Ketergantungan tetelan goreng | Semua review sebut ini | **Medium** — kalau supply issue, brand terdampak |

### Sentiment Trend (as of Jul 2, 2026)

Dari 140 review unik terlacak (149 raw, 9 duplikat, Nov 2025 - Jun 2026):
- 122 review 5★ (87.1%)
- 11 review 4★ (7.9%)
- 5 review 3★ (3.6%)
- 1 review 2★ (0.7%)
- 1 review 1★ (0.7%)
- **Trend: Positif stabil — dikoreksi.** ⚠️ Dedup correction: 149→140 (9 duplikat via triple-key). 5★: 87.9%→87.1%. Tidak ada review baru sejak Jun 29. Total tracked: 140 unik.
- 🆕 **Review Jun 29:** 4 review baru — 3× 5★ (Alif Lebrian, Joko ipb117, Dewagedepuja Trisuda), 1× 4★ (nanda ivana). Hari Senin, velocity rendah (4 review) — normal.
- 🔴 **FIRST-EVER 1★:** raudhah hayati (Jun 28) — severity CRITICAL. Tanpa preseden. Teks tidak tersedia — prioritas #1 untuk investigasi. Tidak ada 1★ baru Jun 29.
- 🔴 **3★ streak di 14 hari BROKEN:** Mochammad Fajar (Jun 28). Tidak ada 3★ baru Jun 29 — situasi terkendali untuk sekarang. Monitor terus.
- 🟢 **5★ momentum maintained:** +3 review 5★ Jun 29. Total 5★: 122 (87.1% deduped). Trend rating jangka panjang masih sangat positif.
- 🆕 **Rabu Jul 1 sales Rp 36.8M:** Wednesday ke-5 — 211 bills, AOV Rp 174.6K. Wednesday baseline: 5 data point — Rp 24.7M → Rp 34.9M → Rp 22.6M → Rp 20.7M → Rp 36.8M (avg Rp 27.9M). ✅ Tidak anomali (1.3× baseline).
- 🔴 **ANOMALI SALES:** Rp 79.85M di Selasa (Jun 16) — 3.8× baseline Selasa. ⚠️ Masih unresolved.
- 🟢 **Minggu Jun 28 Rp 75.0M:** Sunday ke-5 — 390 bills, AOV Rp 192K. 4.9% di atas Sunday avg (Rp 71.5M). Sunday sekarang 5 data point: avg Rp 72.2M.
- 🟢 **Sabtu Jun 27 Rp 59.2M:** Saturday ke-3 — 341 bills, AOV Rp 174K. Saturday baseline: 3 data point (avg Rp 58.8M, range Rp 51.8-65.5M).
- 🟡 **Sunday Jun 21 sales Rp 61.9M:** 17% di bawah Sunday avg (Rp 72.2M). Jun 28 bounce ke Rp 75.0M — confirmed one-off dip.
- ⚠️ **Sales gap:** Jun 19 (Fri) & Jun 20 (Sat) tidak ada di ESB ingest. 2 hari missing.
- ⚠️ 7 review (5× 3★ + 1× 2★ + 1× 1★) masih tanpa teks — blocker untuk root cause analysis.
- 🟢 **Pipeline improvement confirmed:** Semua 149 review tracked punya nama reviewer.
- 🟢 **ESB 30-hari (May 31 – Jul 1):** Monday 5 data point, Tuesday 5 data point, Wednesday 5 data point, Thursday 4 data point, Friday 3 data point, Saturday 3 data point, Sunday 5 data point. Weekend:weekday ratio ~3–4:1.
- 🟡 **Review velocity stall:** 3 hari tanpa review baru (Jun 30 – Jul 2). Belum masuk 🟡 threshold (3 hari), tapi kalau lanjut sampai 4-5 hari → flag monitoring gap.
- 🟢 **Review velocity:** +4 review Jun 29 (Senin — 3× 5★, 1× 4★). Velocity normal: weekday 1-5/hari.

### Key Insight
**Tetelan goreng bukan sekadar menu — dia adalah brand.** 80%+ konten (reviews, TikTok, Instagram) menyebut ini sebagai alasan utama datang. Ini adalah moat defensible selama kualitas dijaga + gak ada kompetitor yang copy dengan kualitas setara.

**🔴 1★ pertama — critical inflection point.** raudhah hayati (Jun 28) adalah review 1★ pertama dalam sejarah tracking. Tanpa teks review — prioritas #1 untuk investigasi. Kalau ini isolated incident → manageable. Kalau ada 1★ lagi dalam 7 hari → alarm.

**🔴 3★ streak di 14 hari — BROKEN.** Mochammad Fajar (Jun 28) ngasih 3★, mengakhiri 14 hari bersih. 3★ sekarang 5 review (3.6% deduped). Monitor 48-72 jam — kalau ada 3★ lagi, ini bukan coincidence.

**🟢 5★ momentum maintained.** +3 review 5★ Jun 29. Total 5★: 122 (87.1% deduped). Sentiment dominan tetap sangat positif.

**🟢 Monday baseline solid.** Monday ke-5: Rp 30.8M (Jun 29). Excl outlier Rp 68.8M (Jun 1), Monday avg ~Rp 30.0M dari 4 data point normal. Baseline weekday makin solid.

**🟢 Wednesday baseline growing.** Wednesday ke-5: Rp 36.8M (Jul 1) — di atas Wednesday avg Rp 27.9M. 211 bills, AOV Rp 174.6K. Tidak anomali.

**🟢 Sunday recovery confirmed.** Setelah Sunday Jun 21 yang lemah (Rp 61.9M), Jun 28 bounce ke Rp 75.0M — 4.9% di atas avg. Sunday Jun 21 kemungkinan one-off event (cuaca/acara/kompetitor). Sunday avg sekarang Rp 72.2M dari 5 data point.

**⚠️ Dedup correction applied.** 9 duplikat diidentifikasi via triple-key (nama, rating, tanggal). Count 149→140. Persentase 5★: 87.9%→87.1%. Metodologi dedup mencegah overcounting ke depan.

### Health Check Flags
- 🔴 **ANOMALI SALES:** Rp 79.85M Selasa Jun 16 — 3.8× baseline Selasa. Masih unresolved.
- 🔴 **FIRST-EVER 1★:** raudhah hayati (Jun 28) — CRITICAL, tanpa preseden. Teks tidak tersedia.
- 🔴 **3★ STREAK BROKEN:** Mochammad Fajar (Jun 28) — 14 hari bersih berakhir. Tapi Jun 29 bersih — situasi terkendali. Monitor terus.
- 🔴 **First-ever 2★:** Andi Mohamadyusuf (Jun 12) — teks tidak tersedia
- 🟡 **Sunday dip:** Jun 21 Rp 61.9M — 17% di bawah Sunday avg. 🟢 Recovered: Jun 28 Rp 75.0M.
- ⚠️ **Sales gap:** Jun 19 (Fri) & Jun 20 (Sat) missing dari ESB — butuh investigasi ingest cron
- ⚠️ **Missing:** Teks review 3★ (5 reviews) + 2★ (1 review) + 1★ (1 review) — gak bisa analisis root cause. Total 7 review kritis tanpa teks.
- 🟢 **Monitoring names resolved:** Semua 149 review tracked punya nama
- 🟢 **Sunday baseline:** 5 data point, avg Rp 72.2M. Range Rp 61.9-77.6M.
- 🟢 **Saturday baseline:** 3 data point (Rp 51.8M, 65.5M, 59.2M; avg Rp 58.8M). Range Rp 51.8-65.5M.
- 🟢 **Monday baseline:** 5 data point. Excl outlier Rp 68.8M, avg ~Rp 30.0M dari 4 data point normal.
- 🟢 **Wednesday baseline:** 5 data point (avg Rp 27.9M, range Rp 20.7-36.8M). Jul 1 Rp 36.8M — above avg but normal.
- 🟢 **ESB sales:** 30 hari (May 31 – Jul 1). 🔴 Jun 16 Selasa Rp 79.9M outlier unresolved. ⚠️ Jun 19-20 missing. 🟢 Sunday 5 data point (avg Rp 72.2M). Saturday 3 data point (avg Rp 58.8M). Monday 5 data point. Friday 3 data point (avg Rp 27.8M). Thursday 4 data point (avg Rp 25.8M). Wednesday 5 data point (avg Rp 27.9M). Tuesday 5 data point (excl outlier: avg Rp 27.9M).
- ⚠️ **Pending:** Korelasi review ↔ revenue — butuh analisis lebih dalam. Jun 21: 15 review baru (semua 5★) tapi sales Sunday terendah (Rp 61.9M) — kontradiksi menarik.
- ⚠️ **Dedup correction:** 149→140. Duplikat baru: Dhea Syafitri (Jun 25). Total 9 duplikat.
- 🟡 **Review velocity stall:** 3 hari tanpa review baru (Jun 30 – Jul 2).

### Questions for Further Research
1. **🔴 INVESTIGASI:** Apa isi review 1★ raudhah hayati? Ini prioritas #1.
2. **🔴 INVESTIGASI:** Kenapa Selasa Jun 16 Rp 79.9M?
3. **🔴 MONITOR:** Apakah Mochammad Fajar (3★, Jun 28) isolated atau awal dari pattern baru?
4. **🟡 INVESTIGASI:** Kenapa Sunday Jun 21 cuma Rp 61.9M padahal 15 review 5★ baru?
5. **⚠️ Kenapa Jun 19-20 missing dari ESB?** Ingest cron mati atau ESB maintenance?
6. Apa isi review 2★ dan 3★ lainnya? Pattern keluhan?
7. Apakah review 5★ drive repeat purchase? (butuh data ESB)
8. Weekday baseline ~Rp 20-35M terkonfirmasi dengan 22 hari weekday. ⚠️ Jun 16 outlier ekstrem. 🟢 Saturday 3 data point (avg Rp 58.8M). 🟢 Monday 5 data point (avg ~Rp 37.8M incl outlier, ~Rp 30.0M excl). 🟢 Thursday 4 data point (avg Rp 25.8M). 🟢 Wednesday 4 data point (avg Rp 25.7M). 🟢 Friday 3 data point (avg Rp 27.8M). 🟢 Sunday 5 data point (avg Rp 72.2M).
