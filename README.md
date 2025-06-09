<div align="center">
    <h1>Reloop Frontend</h1>
</div>

<p align='center'>
    <a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
    <a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
    <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
    <a href="https://lucide.dev/" target="_blank"><img src="https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React"></a>
</p>

<div align="center">
    <img src="public/logo-color-text.svg" alt="Reloop Logo" width="200"/>
</div>

Reloop Frontend adalah aplikasi web berbasis React yang dibangun dengan Vite, dirancang untuk platform e-commerce dengan fitur-fitur modern dan antarmuka yang responsif.

## 📁 Struktur Direktori

```
reloop-frontend/
├── public/                     # Asset statis
├── src/                        # Source code utama
│   ├── assets/                 # Asset aplikasi
│   ├── components/             # Komponen reusable
│   │   ├── features/           # Komponen berdasarkan fitur
│   │   │   ├── auth/           # Komponen autentikasi
│   │   │   ├── product/        # Komponen produk
│   │   │   └── report/         # Komponen laporan
│   │   ├── layouts/            # Layout komponen
│   │   └── ui/                 # UI komponen dasar
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Halaman aplikasi
│   │   ├── admin/              # Halaman admin
│   │   ├── auth/               # Halaman autentikasi
│   │   ├── common/             # Halaman umum
│   │   │   ├── ForbiddenPage.jsx
│   │   │   ├── MaintenancePage.jsx
│   │   │   ├── NotFoundPage.jsx
│   │   │   ├── ServerErrorPage.jsx
│   │   │   └── index.js
│   │   ├── seller/             # Halaman penjual
│   │   └── user/               # Halaman pengguna
│   ├── routes/                 # Konfigurasi routing
│   │   └── Routes.jsx
│   ├── App.jsx                 # Komponen utama aplikasi
│   ├── App.css                 # Stylesheet utama
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point aplikasi
├── index.html                  # Template HTML
├── package.json                # Dependencies dan scripts
├── postcss.config.js           # Konfigurasi PostCSS
├── tailwind.config.js          # Konfigurasi Tailwind CSS
└── vite.config.js              # Konfigurasi Vite
```

## 🛠️ Prasyarat

Pastikan Anda telah menginstal:

- **Node.js** (versi 16.0 atau lebih baru)
- **npm** atau **yarn** atau **pnpm**

> Notes: Project ini mengunakan npm

## 🚀 Cara Menjalankan di Local

### 1. Clone Repository

```bash
git clone <repository-url>
cd reloop-frontend
```

### 2. Install Dependencies

```bash
npm install
```

atau menggunakan yarn:

```bash
yarn install
```

atau menggunakan pnpm:

```bash
pnpm install
```

### 3. Menjalankan Development Server

```bash
npm run dev
```

atau:

```bash
yarn dev
```

atau:

```bash
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### 4. Build untuk Production

```bash
npm run build
```

### 5. Preview Build Production

```bash
npm run preview
```

## 📱 Fitur Utama

- **Multi-Role System**: Support untuk Admin, Seller, dan User
- **Authentication**: Sistem login dan registrasi
- **Product Management**: Pengelolaan produk untuk seller
- **Responsive Design**: Tampilan yang optimal di berbagai perangkat
- **Modern UI**: Menggunakan Tailwind CSS untuk styling
- **Fast Development**: Hot Module Replacement (HMR) dengan Vite
- **Component-Based**: Arsitektur komponen yang modular dan reusable

## 🎯 Halaman yang Tersedia

### User Pages
- **Home Page**: Halaman utama aplikasi
- **Violation Report Page**: Halaman untuk melaporkan pelanggaran

### Seller Pages
- **Seller Dashboard**: Dashboard untuk penjual
- **Seller Product Page**: Halaman manajemen produk penjual
- **Sell Product Page**: Halaman untuk menambah produk baru

### Admin Pages
- **Admin Dashboard**: Dashboard administrasi

### Auth Pages
- **Login Page**: Halaman masuk
- **Register Page**: Halaman pendaftaran

### Common Pages
- **404 Not Found**: Halaman tidak ditemukan
- **403 Forbidden**: Halaman akses ditolak
- **500 Server Error**: Halaman error server
- **Maintenance**: Halaman pemeliharaan

## 🔧 Konfigurasi

### Tailwind CSS
Proyek ini menggunakan Tailwind CSS dengan konfigurasi kustom. File konfigurasi tersedia di `tailwind.config.js`.

### Vite
Konfigurasi Vite dengan alias path `@` yang mengarah ke folder `src/` untuk import yang lebih bersih.

## 🚀 Scripts yang Tersedia

- `npm run dev` - Menjalankan development server
- `npm run dev:all` - Menjalankan development server dengan fitur tambahan
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production

## 🤝 Contributing

1. Fork repository ini
2. Buat branch feature baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📝 License

Proyek ini menggunakan lisensi ISC.

## 🆘 Troubleshooting

### Port sudah digunakan
Jika port 5173 sudah digunakan, Vite akan otomatis menggunakan port yang tersedia berikutnya.

### Error saat install dependencies
Pastikan Anda menggunakan Node.js versi yang compatible dan jaringan internet stabil.

### Build error
Pastikan semua dependencies telah terinstall dengan benar dan tidak ada error pada kode.

---

