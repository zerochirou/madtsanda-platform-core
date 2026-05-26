
# Zensedotcore
> sebuah layanan peladen yang digunakan sebagai sistem inti dari madtsanda platform

---

## Daftar Isi

- [Gambaran Umum](#gambaran-umum)
- [Fitur Utama](#fitur-utama)
- [Tumpukan Teknologi](#tumpukan-teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Variabel Lingkungan](#variabel-lingkungan)
- [Skrip yang Tersedia](#skrip-yang-tersedia)
- [Alur Kerja Git & Aturan](#alur-kerja-git--aturan)
- [Panduan API](#panduan-api)

---

## Gambaran Umum

**Core Service** merupakan aplikasi backend yang terstruktur dengan baik dan mengikuti **arsitektur modular berbasis fitur**. Pendekatan ini menekankan pemisahan tanggung jawab, keamanan tipe, serta pengalaman pengembang yang optimal.

Implementasi saat ini mencakup modul `account` yang lengkap sebagai contoh pola yang direkomendasikan untuk semua modul di masa mendatang:
- `controller` → menangani lapisan HTTP
- `services` → berisi logika bisnis
- `validator` + `req/res` → pengetikan kuat dan validasi (DTO)
- `routes` → pendaftaran rute tingkat modul

Struktur ini memudahkan penskalaan, pengujian, dan pemeliharaan kode saat sistem berkembang menjadi monolith modular atau layanan terdistribusi.

---

## Fitur Utama

- ✅ **Arsitektur Modular Berbasis Fitur** — Setiap domain berada dalam folder `modules/<domain>/` tersendiri
- ✅ **Semua Berbasis Tipe Aman** — TypeScript penuh + Drizzle ORM
- ✅ **Pemisahan Tanggung Jawab yang Bersih** — Controller, Service, Validator, DTO
- ✅ **Lapisan Autentikasi Bawaan** (`libs/auth.ts`)
- ✅ **Middleware Pencatatan Terstruktur**
- ✅ **Sistem CORS & Plugin** siap untuk ekstensi
- ✅ **Pembantu Timestamp Basis Data** untuk audit yang konsisten
- ✅ **Pengembangan Berbasis Docker** dengan `docker-compose.yaml`
- ✅ **Alur Kerja Git Profesional** ditegakkan melalui Conventional Commits

---

## Tumpukan Teknologi

| Lapisan                | Teknologi               | Tujuan                                              |
|------------------------|-------------------------|-----------------------------------------------------|
| **Runtime**            | Bun                     | Runtime JavaScript/TypeScript yang sangat cepat     |
| **Bahasa**             | TypeScript 5+           | Keamanan tipe dan fitur JavaScript modern           |
| **Kerangka HTTP**      | Adonis  (atau Core HTTP)| Kerangka web yang ringan dan berkinerja tinggi      |
| **ORM**                | Drizzle ORM             | SQL berbasis tipe dengan pengalaman pengembang yang sangat baik |
| **Validasi**           | Zod (direkomendasikan)  | Validasi permintaan runtime & DTO                   |
| **Basis Data**         | PostgreSQL (default)    | Basis data relasional utama                         |
| **Kontainerisasi**     | Docker + Compose        | Lingkungan pengembangan lokal & produksi yang konsisten |
| **Pengelola Paket**    | Bun                     | Pengelolaan dependensi & skrip yang cepat           |
| **Konfigurasi**        | drizzle.config.ts       | Pengelolaan skema basis data & migrasi              |

---

## Struktur Proyek

```
core/
├── src/
│   ├── core/
│   │   └── http/
│   │       ├── app.ts                 # Instans aplikasi & pendaftaran middleware
│   │       └── routes.ts              # Penggabung rute pusat
│   │
│   ├── database/
│   │   ├── schemas/                   # Semua definisi tabel Drizzle
│   │   └── index.ts                   # Koneksi basis data & ekspor skema
│   │
│   ├── helpers/
│   │   └── timestamp_db.ts            # Kolom timestamp yang dapat digunakan kembali (createdAt, updatedAt, dll.)
│   │
│   ├── libs/
│   │   └── auth.ts                    # JWT, hashing kata sandi, utilitas autentikasi
│   │
│   ├── middlewares/
│   │   └── logger.ts                  # Middleware pencatatan permintaan/respons
│   │
│   ├── modules/
│   │   └── account/                   # Modul fitur contoh
│   │       ├── account.controller.ts  # Penangan permintaan HTTP
│   │       ├── account.req.ts         # DTO permintaan / skema validasi
│   │       ├── account.res.ts         # DTO respons / transformer
│   │       ├── account.routes.ts      # Definisi rute modul
│   │       ├── account.services.ts    # Lapisan logika bisnis
│   │       └── account.validator.ts   # Logika validasi tambahan
│   │
│   ├── plugins/
│   │   └── cors.ts                    # Plugin konfigurasi CORS
│   │
│   └── index.ts                       # Titik masuk aplikasi
│
├── .env                               # Variabel lingkungan (diabaikan git)
├── .gitignore
├── bun.lock
├── docker-compose.yaml
├── drizzle.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

> **Catatan**: Fitur baru harus mengikuti struktur yang sama di dalam `src/modules/<nama-fitur>/`.

---

## Memulai

### Prasyarat

- [Bun](https://bun.sh/) ≥ `v1.3.14`
- Docker & Docker Compose (direkomendasikan)
- Basis data PostgreSQL
- RustFS / S3

### Instalasi

```bash
# 1. Kloning repositori
git clone https://github.com/zerochirou/zensedotcore
cd zensedotcore

# 2. Instal dependensi
bun install

# 3. Siapkan berkas lingkungan
cp .env.example .env   # Buat berkas ini jika belum ada
```

### Pengaturan Basis Data

```bash
# Hasilkan & dorong skema (pengembangan)
bun db:push

# Atau hasilkan migrasi
bun db:generate
bun db:migrate
```

### Menjalankan Server Pengembangan

```bash
bun run dev
```

Server akan berjalan pada port yang ditentukan di `.env` (default: `1000`).

### Menggunakan Docker (Direkomendasikan)

```bash
# Jalankan di latar belakang
docker-compose up -d
```

---

## Variabel Lingkungan

Buat berkas `.env` di akar proyek:

```env
# Konfigurasi Aplikasi
APP_PORT=1000

# Konfigurasi basis data
DATABASE_URL="postgresql://username:password@host:port/db_name"

# Better auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Autentikasi Google
GOOGLE_CLIET_ID=
GOOGLE_CLIET_SECRET=
```

> **Catatan Keamanan**: Jangan pernah mengirimkan `.env` atau nilai rahasia apa pun ke repositori.

---

## Skrip yang Tersedia

| Perintah               | Deskripsi                                      |
|------------------------|------------------------------------------------|
| `bun run dev`          | Menjalankan server pengembangan dengan hot reload |
| `bun run build`        | Membangun untuk produksi                       |
| `bun run start`        | Menjalankan server produksi                    |
| `bun db:...`           | Perintah skema & migrasi basis data            |
| `bun test`             | Menjalankan rangkaian pengujian (jika dikonfigurasi) |

---

## Alur Kerja Git & Aturan

Kami secara ketat mengikuti **Conventional Commits** dan strategi percabangan yang bersih untuk menjaga riwayat yang mudah dibaca serta memungkinkan pembuatan changelog otomatis.

### Strategi Percabangan

| Jenis Cabang          | Konvensi Penamaan               | Tujuan                                      |
|-----------------------|---------------------------------|---------------------------------------------|
| Produksi              | `main`                          | Kode stabil dan siap diterapkan             |
| Pengembangan          | `develop`                       | Cabang integrasi (opsional)                 |
| Fitur                 | `feature/<kebab-case-name>`     | Fitur baru                                  |
| Perbaikan Bug         | `fix/<kebab-case-name>`         | Perbaikan bug                               |
| Hotfix                | `hotfix/<name>`                 | Perbaikan mendesak produksi                 |
| Pekerjaan / Refaktor  | `chore/<name>` atau `refactor/<name>` | Pemeliharaan, pembaruan dependensi, refaktor |

### Konvensi Pesan Commit

Kami menggunakan **Conventional Commits**:

```
<type>(<scope>): <deskripsi singkat>

[badan opsional]

[footer opsional]
```

**Jenis yang Diizinkan:**

- `feat` — Fitur baru
- `fix` — Perbaikan bug
- `docs` — Perubahan dokumentasi
- `style` — Gaya/format kode (tanpa perubahan logika)
- `refactor` — Refaktor kode
- `perf` — Peningkatan kinerja
- `test` — Menambah atau memperbarui pengujian
- `chore` — Pembangunan, CI, dependensi, atau perubahan lainnya

**Contoh Baik:**

```bash
feat(account): tambahkan verifikasi email saat pendaftaran
fix(auth): tangani penyegaran token saat access token kedaluwarsa
docs(readme): tingkatkan bagian aturan git dan struktur proyek
refactor(account): ekstrak hashing kata sandi ke layanan terpisah
chore(deps): tingkatkan drizzle-orm ke versi terbaru
```

**Contoh Buruk:**

- `update stuff`
- `fix bug`
- `done`

### Aturan Pull Request

1. Buat PR dari `feature/*` atau `fix/*` ke `develop` (atau `main` untuk hotfix)
2. Diperlukan minimal **1 persetujuan review**
3. Semua pemeriksaan CI harus lulus
4. Jaga PR tetap kecil dan terfokus (idealnya < 400 baris perubahan)
5. Perbarui `README.md` atau dokumentasi terkait jika perilaku berubah
6. Tautkan isu/tiket terkait dalam deskripsi PR

---

## Panduan API

Semua modul harus mengikuti konvensi berikut:

- Rute didaftarkan secara terpusat melalui `src/core/http/routes.ts`
- Setiap modul mengekspor `account.routes.ts` (atau setara) sendiri
- Gunakan kode status HTTP yang tepat dan format respons yang konsisten
- Semua body permintaan harus divalidasi menggunakan skema Zod di `*.validator.ts` atau `*.req.ts`
- Data sensitif tidak boleh dikembalikan dalam respons (gunakan transformer `account.res.ts`)

Struktur respons contoh (direkomendasikan):

```json
{
  "success": true,
  "message": "Akun berhasil dibuat",
  "data": { ... }
}
```

---