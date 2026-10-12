
const dataMentah = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Menghapus spasi di awal dan akhir string
const dataBersih = dataMentah.trim();

// 2. Mengubah string menjadi array nama
const daftarNama = dataBersih.split(",");

// 3. Membersihkan spasi dan mengubah huruf menjadi kecil
const namaBersih = daftarNama.map(nama => nama.trim().toLowerCase());

// 4. Menggabungkan nama menjadi satu string
const hasilAkhir = namaBersih.join(" | ");

console.log(hasilAkhir);
