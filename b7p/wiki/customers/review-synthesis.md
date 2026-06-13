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
- **65 reviews total** terlacak — naik dari 52 (+13 reviews: 11× 5★ + 1× 4★ + 1× 5★ duplikat, Jun 13 batch)
- 54× 5★ (83%), 8× 4★ (12%), 2× 3★ (3%), 1× 2★ (2%)
- Velocity: ~4-13/hari, dengan spike Jun 13 (13 review dalam 1 hari — kemungkinan batch submission atau event-driven)
- Pattern: reviews masuk sepanjang hari, cluster di jam makan siang dan malam
- ⚠️ **First 2★ review detected** — Andi Mohamadyusuf (Jun 12). Distribusi 5★ naik ke 83% (54/65), 4★ normalisasi ke 12% (8/65). Review baru batch Jun 13: 11× 5★ + 1× 4★. Mayoritas 5★ dengan nama reviewer tersedia.
- 🟢 **Monitoring gap partially resolved:** 12 dari 13 review baru (Jun 13 batch) punya nama reviewer. Hanya 1 yang tanpa nama. Pipeline improvement terlihat efektif.
- Sales context 14 hari (Jun 1 – Jun 13): Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon/normal) → Rp 28.4M (Tue) → Rp 34.9M (Wed) → Rp 28.0M (Thu) → Rp 28.8M (Fri) → Rp 65.5M (Sat)
- 🆕 Saturday: Rp 51.8M (Jun 6) → Rp 65.5M (Jun 13, +26% WoW, 2 data point). Weekend (Sat-Sun) ~Rp 52-78M, ratio ~3-4x dari weekday.

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
| Review monitoring names | 🟢 Improved | Jun 13 batch: 12/13 ada nama — pipeline improvement |
| Demographics detail | Segmentasi terlalu kasar | Survey atau tiket data |
| Repeat rate | Gak tau loyalitas | Butuh data ESB atau loyalty program |
| AGP (Ayam Goreng Pandawa) | Belum ada data | Setup monitoring serupa |
| | Sales weekday baseline | 14 hari data. Weekday ~Rp 20-35M, Saturday ~Rp 52-66M (2 data point), Sunday ~Rp 75-78M. Ratio weekend:weekday ~3-4:1 ✅. |
