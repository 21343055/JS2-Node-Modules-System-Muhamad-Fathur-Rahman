# JS2-Node-Modules-System-Muhamad-Fathur-Rahman

Node.js menggunakan sistem modul yang mengikuti spesifikasi CommonJS. Beberapa konsep kunci termasuk CommonJS, modul, fungsi require(), module.exports, dan modul bawaan.
CommonJS

Spesifikasi CommonJS mendefinisikan cara modul didefinisikan, diimpor, dan digunakan dalam lingkungan Node.js.
Modul

Modul dalam Node.js adalah unit kode independen yang memungkinkan pengembang memisahkan fungsionalitas dalam aplikasi.
Fungsi require()

require() digunakan untuk mengimpor modul ke dalam kode Node.js.
module.exports

module.exports digunakan untuk mengekspor kode atau data dari suatu modul agar dapat diakses oleh modul lain.
Modul Bawaan (Built-in Modules)

Node.js menyertakan modul bawaan seperti fs untuk operasi berkas, http untuk membuat server web, dll.
Node Package Manager (NPM)

NPM adalah alat pengelola paket yang digunakan untuk mengelola, menginstal, dan mendistribusikan paket perangkat lunak dalam proyek-proyek Node.js.
Paket

Paket adalah unit perangkat lunak yang terdiri dari kode JavaScript, berkas konfigurasi, dan informasi lainnya.
package.json

package.json mencatat semua dependensi proyek, skrip yang dapat dijalankan, dan informasi lainnya.
Instalasi dan Publikasi

Pengembang dapat menginstal dan mempublikasikan paket menggunakan perintah npm install dan npm publish.
Argumen Baris Perintah dalam Node.js

Argumen baris perintah adalah input tambahan yang diberikan oleh pengguna saat menjalankan skrip Node.js melalui terminal.
process.argv

process.argv adalah array yang berisi argumen-argumen yang diberikan saat menjalankan skrip Node.js.
Menggunakan Nodemon untuk Pengembangan Real-time

Nodemon memungkinkan pengembang untuk menjalankan aplikasi Node.js dan secara otomatis memuat ulang saat terjadi perubahan.
Membangun Aplikasi Catatan

Aplikasi catatan sederhana dengan fitur menambah, menghapus, menampilkan, dan membaca catatan.
Menambahkan Catatan Baru

Pengguna dapat menambahkan catatan baru dengan perintah node app.js tambah --judul="Judul" --isi="Isi".
Menghapus Catatan

Pengguna dapat menghapus catatan dengan perintah node app.js hapus --judul="Judul".
Menampilkan Semua Catatan

Pengguna dapat melihat semua catatan dengan perintah node app.js list.
Membaca Catatan

Pengguna dapat membaca catatan dengan perintah node app.js read --judul="Judul".
