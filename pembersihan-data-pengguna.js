
const daftarProduk = [
  { nama: "Laptop", harga: 1000, aktif: true },
  { nama: "Mouse", harga: 20, aktif: false },
  { nama: "Keyboard", harga: 50, aktif: true }
];

// 1. Menyaring produk yang aktif
const produkAktif = daftarProduk.filter(produk => produk.aktif === true);

// 2. Mengubah nama produk menjadi huruf kapital
const namaProduk = produkAktif.map(produk => produk.nama.toUpperCase());

// 3. Menghitung total harga produk aktif
const totalHarga = produkAktif.reduce((total, produk) => total + produk.harga, 0);

// Menampilkan hasil
console.log("Produk Aktif:", produkAktif);
console.log("Nama Produk:", namaProduk);
console.log("Total Harga:", totalHarga);
