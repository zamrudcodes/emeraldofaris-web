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

**Unknown.** Review teks dari 3★ tidak tersedia via current monitoring. Ini gap kritis.

### Review Velocity

Dari tracked sample (Nov 2025 - Jun 2026):
- **47 reviews total** terlacak — naik dari 40 (+7 reviews: 5 di Jun 7, 2 di Jun 6)
- 38× 5★ (81%), 7× 4★ (15%), 2× 3★ (4%)
- Velocity: ~4-7/hari, konsisten
- Pattern: reviews masuk sepanjang hari, cluster di jam makan siang dan malam
- 🆕 Influx 4★ naik: 3 dari 7 review baru adalah 4★ (Ayu Maharani, Ridwan Arieftriansyah, Mommy Lie). Ini menormalkan distribusi — 5★ turun dari 85% ke 81%, 4★ naik dari 10% ke 15%. Bukan red flag (0 review 1-2★), tapi perlu dimonitor untuk shifting ekspektasi.
- Sales context 11 hari (Jun 1 – Jun 10): Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon/normal) → Rp 28.4M (Tue) → Rp 34.9M (Wed)
- 🆕 Senin normal (Jun 8): Rp 29.2M gross, 191 bills, AOV Rp 153K. Ini mengkonfirmasi bahwa Monday Jun 1 (Rp 68.8M) adalah outlier — kemungkinan libur/Lebaran carryover. Selasa normal (Jun 9): Rp 28.4M, 190 bills, AOV Rp 150K — konsisten. Rabu Jun 10: Rp 34.9M, 213 bills, AOV Rp 164K — ini rekor weekday tertinggi. Bukan outlier seperti Monday Jun 1, tapi +41% dari Wednesday sebelumnya (Jun 3: Rp 24.7M). Kemungkinan natural Wednesday growth atau ada event. Perlu 1-2 Wednesday lagi untuk konfirmasi. AOV naik ke Rp 164K vs Rp 140K (Jun 3) — menarik, ada item higher-value yang kejual lebih banyak.
- Weekend (Sat-Sun) ~Rp 52-78M, ratio ~3-4x dari weekday baseline Rp 20-35M.
- Weekday baseline ~Rp 20-35M terkonfirmasi (8 hari: Mon-Fri, 2.5 minggu data).

### Customer Quote Board

> "WARNING PECINTA BAKSO!!! ADA BAKSO ENAK DI BOGOR, ADA TETELAN GORENGNYA!!!" — @cicipinbogor

> "Bakso ter-the best di Bogor versi gue" — IG Reel creator

> "Kalau cuma bisa ada satu makanan di dunia ini, lo..." — IG Reel (unfinished quote, implying strong preference)

> "Beneran harga nya terjangkau banget guys cuman mulai 16.000an" — IG Reel creator

> "Overall worth the price banget" — IG Reel creator

## Gaps & Next Research

| Gap | Impact | Action |
|-----|--------|--------|
| Teks review 1-3★ gak ada | Gak tau pain points | Upgrade scraper ke yang bisa ambil teks |
| Demographics detail | Segmentasi terlalu kasar | Survey atau tiket data |
| Repeat rate | Gak tau loyalitas | Butuh data ESB atau loyalty program |
| AGP (Ayam Goreng Pandawa) | Belum ada data | Setup monitoring serupa |
| | Sales weekday baseline | Butuh data tambahan | 11 hari — threshold analisis tercapai. Pola weekday vs weekend jelas ✅. Monday anomaly resolved. Wednesday range Rp 25-35M (2 data point: Jun 3, Jun 10). |
