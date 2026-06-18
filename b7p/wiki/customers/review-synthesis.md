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

**⚠️ First concern detected.** Review teks dari 2★ dan 3★ tidak tersedia via current monitoring. June 2026 menandai review 2★ pertama (Andi Mohamadyusuf, Jun 12) + 4 review 3★ (Meigummy, M.Y. Ridha, Tya Tami, Al Boss). Total 4 review 3★ sekarang (4.4% dari 91). Tidak ada 3★ baru di Jun 17 & 18 — keempat kalinya 3★ gak bertambah dalam 4 compile. Melambat, tapi 2★ masih 1. Kita gak tau apa yang bikin pelanggan kasih 2-3★.

### Review Velocity

Dari tracked sample (Nov 2025 - Jun 2026):
- **91 reviews total** terlacak — naik dari 89 (+2 review 5★ Jun 18: kay, Ultra Men)
- 77× 5★ (84.6%), 9× 4★ (9.9%), 4× 3★ (4.4%), 1× 2★ (1.1%)
- Velocity: ~2-13/hari, dengan spike Jun 13 (13 review dalam 1 hari)
- Pattern: reviews masuk sepanjang hari
- 🟢 **5★ naik ke 84.6%** (77/91) — +0.3pp dari 84.3%. Semua 2 review baru adalah 5★.
- 🟢 **3★ stabil di 4 review (4.4%):** Tidak bertambah sejak Jun 16 — 4 compile berturut-turut.
- ⚠️ **First 2★ review detected** — Andi Mohamadyusuf (Jun 12). Masih 1 saja.
- ⚠️ **Duplikat:** Grace Sancaya (2×), Patika Anggraini (2×), Putri Devi Permatasari (2×), Mela Astifa (2×), Mutiara S (2×), Rayhaan Imtiyaz (2×) — 6 kasus total, tidak bertambah.
- 🟢 **Pipeline improvement confirmed:** Semua review tracked punya nama reviewer.
- 🔴 **ANOMALI SALES:** Jun 16 (Selasa) Rp 79.85M — 3.8× baseline Selasa. Total bills 411 (AOV Rp 194K). ⏳ Butuh data Jun 23 untuk konfirmasi.
- Sales context 19 hari (Jun 1 – Jun 18): Rp 68.8M (Mon/outlier) → Rp 20.8M (Tue) → Rp 24.7M (Wed) → Rp 20.3M (Thu) → Rp 27.6M (Fri) → Rp 51.8M (Sat) → Rp 77.6M (Sun) → Rp 29.2M (Mon) → Rp 28.4M (Tue) → Rp 34.9M (Wed) → Rp 28.0M (Thu) → Rp 28.8M (Fri) → Rp 65.5M (Sat) → Rp 71.2M (Sun) → Rp 37.9M (Mon) → **Rp 79.9M (Tue ⚠️ OUTLIER)** → **Rp 22.6M (Wed)** → **Rp 30.9M (Thu)**
- 🆕 Thursday dengan 3 data point: Rp 20.3M → Rp 28.0M → Rp 30.9M (avg Rp 26.4M, tren naik konsisten)
- 🆕 Wednesday dengan 3 data point: Rp 24.7M → Rp 34.9M → Rp 22.6M (avg normal ~Rp 27.4M)
- Tuesday: 3 data point — Rp 20.8M → Rp 28.4M → **Rp 79.9M (anomali)**. Exclude outlier: weekday Tue ~Rp 24.6M.
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
| Review monitoring names | 🟢 Resolved | Semua review tracked punya nama |
| Demographics detail | Segmentasi terlalu kasar | Survey atau tiket data |
| Repeat rate | Gak tau loyalitas | Butuh data ESB atau loyalty program |
| AGP (Ayam Goreng Pandawa) | Belum ada data | Setup monitoring serupa |
| 🔴 Sales anomali Jun 16 | Rp 79.9M Selasa — gak wajar | ⏳ Butuh data Jun 23 untuk konfirmasi |
| 3★ creep (melambat) | 4 review (4.4%) — 0 baru di Jun 17 & 18 (4 compile) | 🟢 Melambat, monitor terus |
| 6× duplikat reviews | Data inflasi ringan — tidak bertambah | Dedup di pipeline atau state file (low priority) |
| Sales weekday baseline | 19 hari data. Kamis: 3 data point (avg Rp 26.4M, tren naik). Weekday ~Rp 20-35M, ⚠️ Jun 16 outlier besar. Monday 3 data point (range Rp 29-69M). Saturday ~Rp 52-66M. Sunday ~Rp 71-78M. |
