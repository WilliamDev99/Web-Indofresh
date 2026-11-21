// Data bersama untuk semua halaman AURA.
export const DEVELOPER_NAME = "Indofresh";
export const APP_ID = "id.aura.aura";
// Email & nomor kontak AURA, tampil di semua halaman AURA.
// Kosongkan CONTACT_EMAIL untuk menyembunyikan email.
export const CONTACT_EMAIL = "aura.perlindungan@gmail.com";
export const CONTACT_PHONE = {
  display: "0822-5994-2350",
  tel: "+6282259942350",
  whatsapp: "6282259942350",
};

// Penghapusan akun
export const DELETION_DAYS = 7; // hari kerja untuk permintaan lewat email
export const RETENTION_AFTER_DELETE_DAYS = 30; // hari sampai data hilang dari server

export const auraPages = [
  { href: "/aura/privasi", label: "Kebijakan Privasi", short: "Privasi" },
  {
    href: "/aura/syarat-layanan",
    label: "Persyaratan Layanan",
    short: "Syarat",
  },
  {
    href: "/aura/hapus-akun",
    label: "Hapus Akun & Data",
    short: "Hapus Akun",
    // Tidak muat di header HP; tetap tampil di footer.
    header: false,
  },
  { href: "/aura/kontak", label: "Kontak", short: "Kontak" },
];
