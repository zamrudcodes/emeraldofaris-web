# Sentiment Analysis — B7P Review Sentiment

*Compiled from: [[raw/reviews/google_reviews]], [[raw/reviews/lemon8_review]], [[raw/social/social_mentions]]*  
*Backlinks: [[index]], [[customers/review-synthesis]], [[insights/product-moat]]*

---

## Overall Sentiment: Strongly Positive (4.7★ baseline)

### Rating Distribution (tracked: 65 of ~3,135+ reviews)

```
5★ █████████████████████████████████  83%
4★ █████                              12%
3★ ██                                  3%
2★                                     2%
1★                                    0%
```

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
| ⚠️ **First 2★ review** | 1 review 2★ dari 65 — nama & teks tidak tersedia | **High** — investigasi segera |
| 3★ reviews (2 tracked) | 2 review 3★ dari 65 — teks tidak tersedia | **Unknown** — perlu investigasi |
| Harga Rp 39K untuk street food | Bisa jadi resistance | **Low-Medium** — offset oleh value perception |
| "Pedagang kaki lima" positioning | Lemon8 mention | **Low** — bisa jadi authenticity advantage |
| Ketergantungan tetelan goreng | Semua review sebut ini | **Medium** — kalau supply issue, brand terdampak |

### Sentiment Trend (as of Jun 14, 2026)

Dari 65 review terlacak (Nov 2025 - June 2026):
- 54 review 5★ (83%)
- 8 review 4★ (12%)
- 2 review 3★ (3%)
- 1 review 2★ (2%)
- 0 review 1★
- **Trend: Sangat positif.** +13 review baru since last compile (Jun 13 batch: 11× 5★ + 1× 4★ + 1× 5★ dari Patika Anggraini yang muncul 2x — perlu dedup). Nama reviewer tersedia untuk 12 dari 13 review baru — monitoring gap resolved untuk batch ini. Distribusi 5★ naik ke 83% (dari 81%) karena 11 dari 13 review baru adalah 5★. 4★ normalisasi ke 12% (turun dari 14%).
- ⚠️ **First-ever 2★ review** (Andi Mohamadyusuf, Jun 12): Ini perubahan signifikan dari status \"0 review 1-2★\" sebelumnya. Tanpa teks, gak bisa analisis root cause. Tapi ini bukan anomali kecil — ini first sub-3★ dalam 65 review. Pipeline monitoring perlu di-upgrade untuk capture teks + nama.
- ⚠️ 2 review 3★ masih tanpa teks — blocker untuk root cause analysis.
- ⚠️ Grace Sancaya & Patika Anggraini muncul 2x — kemungkinan duplicate entry, perlu dedup.
- 🆕 **Sales 14-hari (Jun 1 – Jun 13):** Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon/normal) → Rp 28.4M (Tue) → Rp 34.9M (Wed) → Rp 28.0M (Thu) → Rp 28.8M (Fri) → Rp 65.5M (Sat). Weekday baseline ~Rp 20-35M (Tue-Fri + new Mon) terkonfirmasi. Monday outlier (Jun 1: Rp 68.8M) resolved oleh Monday normal (Jun 8: Rp 29.2M). Friday stabil: Rp 27.6M (Jun 5) → Rp 28.8M (Jun 12, +4% WoW). Saturday: Rp 51.8M (Jun 6) → Rp 65.5M (Jun 13, +26% WoW — 2 data point sekarang). Weekend (Sat-Sun) ~Rp 52-78M, rasio weekend vs weekday ~3-4:1.

### Key Insight
**Tetelan goreng bukan sekadar menu — dia adalah brand.** 80%+ konten (reviews, TikTok, Instagram) menyebut ini sebagai alasan utama datang. Ini adalah moat defensible selama kualitas dijaga + gak ada kompetitor yang copy dengan kualitas setara.

### Health Check Flags
- 🔴 **New Alert:** 2★ review pertama terdeteksi — investigasi segera
- ⚠️ **Missing:** Teks review 3★ (2 reviews) + 2★ (1 review) — gak bisa analisis root cause
- 🟢 **Monitoring gap resolved:** Jun 13 batch — 12 dari 13 review baru ada nama reviewer
- ✅ **Green:** 5★ naik ke 83% (54/65), dominan
- **ESB sales:** 14 hari (May 31 – Jun 13) — threshold analisis tren tercapai ✅. Saturday 2 data point: Rp 51.8M → Rp 65.5M (+26% WoW)
- ⚠️ **Pending:** Korelasi review ↔ revenue — butuh analisis lebih dalam
- ⚠️ **Duplicate:** Grace Sancaya (Jun 1) + Patika Anggraini (Jun 13) — masing-masing 2x, perlu dedup

### Questions for Further Research
1. Apa isi review 2★ dan 3★? Pattern keluhan?
2. Apakah review 5★ drive repeat purchase? (butuh data ESB)
3. Di jam berapa review paling banyak masuk? Korelasi dengan peak hours?
4. Weekday baseline ~Rp 20-35M sudah terkonfirmasi dengan 10 hari weekday (Mon-Fri, 3 minggu penuh). Monday outlier Jun 1 (Rp 68.8M) resolved. Friday konsisten di Rp 27.6M–28.8M. Saturday: Rp 51.8M → Rp 65.5M (+26% WoW, 2 data point). Weekend ~Rp 52-78M.
5. ⚠️ Upgrade pipeline monitoring untuk capture nama + teks review — 2★ tanpa konteks sangat berbahaya.
