# Customer Review Synthesis — What Customers Say

*Source: [[raw/reviews/google_reviews]] (ratings), [[raw/reviews/lemon8_review]] (detailed), [[raw/social/social_mentions]] (social)*  
*Backlinks: [[index]], [[insights/sentiment-analysis]], [[insights/product-moat]]*

---

## Who Are B7P Customers?

### From Social Mentions

| Segment | Signal | Evidence |
|---------|--------|----------|
| **Foodies / Content Creators** | Aktif bikin konten review | TikTok, IG Reels, Lemon8 posts |
| **Keluarga** | Tagline "Bakso Hangat Andalan Keluarga" | Brand positioning |
| **Anak muda** | Dominan di TikTok/IG | Creator demographics |
| **Warga lokal Bogor** | "tengah kota banget" | Location convenience |
| **Wisatawan kuliner** | "Ke Bogor wajib cobain" | Word-of-mouth |

### What They Love

**Top 5 Praise Points** (ranked by frequency across all sources):

1. 🥇 **Tetelan goreng** — "crispy, juicy, unik"
2. 🥈 **Daging bakso padat** — "berasa daging, bukan tepung"
3. 🥉 **Harga terjangkau** — "mulai 16K", "worth it"
4. **Kuah panas & gurih** — "garansi kuah panas"
5. **Pelayanan ramah** — "staf ramah, pelayanan cepat"

### What They Complain About

**⚠️ First concern detected.** Review teks dari 2★ dan 3★ tidak tersedia via current monitoring. June 2026 menandai review 2★ pertama dalam tracked sample. Ini gap kritis — kita gak tau apa yang bikin pelanggan kasih 2★.

### Review Velocity

Dari tracked sample (Nov 2025 - Jun 2026):
- **52 reviews total** terlacak — naik dari 47 (+5 reviews: 4× 5★ + 1× 2★, Jun 12 batch, unnamed)
- 42× 5★ (81%), 7× 4★ (14%), 2× 3★ (4%), 1× 2★ (2%)
- Velocity: ~4-7/hari, konsisten
- Pattern: reviews masuk sepanjang hari, cluster di jam makan siang dan malam
- ⚠️ **First 2★ review detected** — nama reviewer dan teks tidak tersedia. Distribusi 5★ stabil di 81% (42/52), 4★ normalisasi ke 14% (7/52). Review baru batch Jun 12: 4× 5★ + 1× 2★. Satu review 2★ di antara 4 review 5★ bisa jadi outlier, tapi tetap perlu investigasi segera — apa root cause-nya?
- Sales context 12 hari (Jun 1 – Jun 12): Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon/normal) → Rp 28.4M (Tue) → Rp 34.9M (Wed) → Rp 28.0M (Thu) → Rp 28.8M (Fri)
- 🆕 Friday stabil: Jun 5 (Rp 27.6M, 172 bills) → Jun 12 (Rp 28.8M, 180 bills). Weekday baseline ~Rp 20-35M terkonfirmasi (10 hari: Mon-Fri, 3 minggu penuh data). Weekend (Sat-Sun) ~Rp 52-78M, ratio ~3-4x dari weekday.
- Senin normal (Jun 8): Rp 29.2M gross, 191 bills, AOV Rp 153K — konfirmasi Senin Jun 1 (Rp 68.8M) adalah outlier.
- Thursday Jun 11: Rp 28.0M — naik 38% dari Thursday sebelumnya (Jun 4: Rp 20.3M). Kemungkinan Jun 4 adalah underperform (bukan Jun 11 overperform).

### Customer Quote Board

> "WARNING PECINTA BAKSO!!! ADA BAKSO ENAK DI BOGOR, ADA TETELAN GORENGNYA!!!" — @cicipinbogor

> "Bakso ter-the best di Bogor versi gue" — IG Reel creator

> "Kalau cuma bisa ada satu makanan di dunia ini, lo..." — IG Reel (unfinished quote, implying strong preference)

> "Beneran harga nya terjangkau banget guys cuman mulai 16.000an" — IG Reel creator

> "Overall worth the price banget" — IG Reel creator

## Gaps & Next Research

| Gap | Impact | Action |
|-----|--------|--------|
| Teks review 2-3★ gak ada | 🔴 Gak tau pain points — ada 2★ baru! | Upgrade scraper segera |
| Review monitoring names | 🟡 5 review tanpa nama | Fix pipeline capture |
| Demographics detail | Segmentasi terlalu kasar | Survey atau tiket data |
| Repeat rate | Gak tau loyalitas | Butuh data ESB atau loyalty program |
| AGP (Ayam Goreng Pandawa) | Belum ada data | Setup monitoring serupa |
| | Sales weekday baseline | 10 hari Mon-Fri (3 minggu) — pola weekday vs weekend jelas ✅. Friday konsisten di Rp 27-28M (2 data point). Weekend ~3-4x weekday. |
