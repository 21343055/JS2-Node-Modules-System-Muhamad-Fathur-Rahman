//const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama saya Muhamad Fathur Rahman dengan NIM 21343055')
//fs.appendFileSync('catatan.txt', 'Saya tinggal di Lapai, Nanggalo, Padang, Sumatera Barat')

//const validator = require('validator')
//const catatan = require('./catatan.js')
//const pesan = catatan()
//console.log(pesan)
//console.log(validator.isURL('https://patot.com'))

//Latihan 1
//const chalk = require('chalk');
//console.log(chalk.blue('print warna biru sukses'));

// const ambilCatatan = require('./catatan.js')

// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'tambah') {
//     console.log('Tambah Catatan')
// } else if (command === 'hapus') {
//     console.log('Hapus Catatan')
// }

// const yargs = require('yargs')
// const catatan = require('./catatan.js')
// // Kustomisasi versi yargs
// yargs.version('10.1.0')
// // Membuat perintah (command) 'tambah'
// yargs.command({
//     command: 'tambah',
//     describe: 'tambah sebuah catatan baru',
//     handler: function () {
//         console.log('Sebuah catatan baru ditambahkan!')
//     }
// })
// // Perintah hapus
// yargs.command({
//     command: 'hapus',
//     describe: 'hapus catatan',
//     handler: function () {
//         console.log('Catatan berhasil dihapus')
//     }
// })
// // Instruksi no.4 letakan disini
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Judul: ' + argv.judul)
        console.log('Isi: ' + argv.isi)
    }
})
// letakan bagian ini pada baris terakhir
// console.log(yargs.argv)
yargs.parse()
