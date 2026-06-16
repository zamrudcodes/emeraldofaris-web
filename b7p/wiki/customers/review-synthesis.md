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

**⚠️ First concern detected.** Review teks dari 2★ dan 3★ tidak tersedia via current monitoring. June 2026 menandai review 2★ pertama (Andi Mohamadyusuf, Jun 12) + 2 review 3★ baru (Tya Tami Jun 15, Al Boss Jun 16). Total 4 review 3★ sekarang (5.0% dari 80). Tren 3★ meningkat dalam 30 hari terakhir: 2 dari 4 review 3★ tracked muncul dalam 2 hari terakhir. Kita gak tau apa yang bikin pelanggan kasih 2-3★.

### Review Velocity

Dari tracked sample (Nov 2025 - Jun 2026):
- **80 reviews total** terlacak — naik dari 71 (+9 reviews: 7 dari Jun 16 + 1 dari Jun 14-15 yang belum di-compile)
- 66× 5★ (82.5%), 9× 4★ (11.2%), 4× 3★ (5.0%), 1× 2★ (1.2%)
- Velocity: ~4-13/hari, dengan spike Jun 13 (13 review dalam 1 hari — batch submission atau event-driven)
- Pattern: reviews masuk sepanjang hari, cluster di jam makan siang dan malam
- ⚠️ **5★ di 82.5%** (66/80) — naik tipis dari 82% karena 6/7 review Jun 16 adalah 5★
- ⚠️ **3★ meningkat:** 2 → 3 → 4 review (3.8% → 4% → 5.0%). 50% dari 3★ masuk dalam 30 hari terakhir — tren mengkhawatirkan.
- ⚠️ **First 2★ review detected** — Andi Mohamadyusuf (Jun 12). Tanpa teks.
- ⚠️ **Duplikat bertambah:** Grace Sancaya (2×), Patika Anggraini (2×), Putri Devi Permatasari (2×), Mela Astifa (2×), Mutiara S (2×), Rayhaan Imtiyaz (2×) — 6 kasus total, +3 baru dari Jun 14-16.
- 🟢 **Pipeline improvement confirmed:** Semua 28 review Jun 12-16 batch punya nama reviewer.
- 🔴 **ANOMALI SALES:** Jun 16 (Selasa) Rp 79.85M — 3.8× baseline Selasa. Total bills 411 (AOV Rp 194K). Ini di atas Sunday average (Rp 74.7M). Investigasi diperlukan.
- Sales context 17 hari (Jun 1 – Jun 16): Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon) → Rp 28.4M (Tue) → Rp 34.9M (Wed) → Rp 28.0M (Thu) → Rp 28.8M (Fri) → Rp 65.5M (Sat) → Rp 71.2M (Sun) → Rp 37.9M (Mon) → **Rp 79.9M (Tue ⚠️ OUTLIER)**
- 🆕 Tuesday: 3 data point — Rp 20.8M → Rp 28.4M → **Rp 79.9M (anomali)**. Exclude outlier: weekday Tue ~Rp 24.6M.
- Sunday: Rp 75.3M → Rp 77.6M → Rp 71.2M (3 data point, avg Rp 74.7M). Weekend (Sat-Sun) ratio ~3-4x dari weekday normal.

### Customer Quote Board

> "WARNING PECINTA BAKSO!!! ADA BAKSO ENAK DI BOGOR, ADA TETELAN GORENGNYA!!!" — @cicipinbogor

> "Bakso ter-the best di Bogor versi gue" — IG Reel creator

> "Kalau cuma bisa ada satu makanan di dunia ini, lo..." — IG Reel (unfinished quote, implying strong preference)

> "Beneran harga nya terjangkau banget guys cuman mulai 16.000an" — IG Reel creator

> "Overall worth the price banget" — IG Reel creator

## Gaps & Next Research

| Gap | Impact | Action |
|-----|--------|--------|
| Teks review 2-3★ gak ada | 🔴 Gak tau pain points — 4 review 3★ + 1 review 2★ tanpa teks | Upgrade scraper segera |
| Review monitoring names | 🟢 Resolved | Semua 28 review Jun 12-16 batch punya nama |
| Demographics detail | Segmentasi terlalu kasar | Survey atau tiket data |
| Repeat rate | Gak tau loyalitas | Butuh data ESB atau loyalty program |
| AGP (Ayam Goreng Pandawa) | Belum ada data | Setup monitoring serupa |
| 🔴 Sales anomali Jun 16 | Rp 79.9M Selasa — gak wajar | Investigasi: libur nasional? event? billing error? |
| 3★ creep (2 baru dalam 2 hari) | Tren meningkat — 5.0% sekarang | Monitor ketat. Kalau lanjut, severity naik. |
| 6x duplikat reviews | Data inflasi ringan | Dedup di pipeline atau state file |
| | Sales weekday baseline | 17 hari data. Weekday ~Rp 20-35M, ⚠️ Jun 16 outlier besar. Monday 3 data point (range Rp 29-69M). Saturday ~Rp 52-66M. Sunday ~Rp 71-78M. | 
