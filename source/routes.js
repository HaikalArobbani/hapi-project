// Mengimpor modul handler.js, yang akan menjadi handler untuk rute ini
const {getHandler,getUser,getLost,getLocation,postLogin} = require("./handler");

// Mendefinisikan rute-rute dalam bentuk array objek
const routes = [
    {
        method: 'GET',        // Menetapkan metode HTTP untuk rute ini (GET)
        path: '/',            // Menetapkan path atau URL yang akan mengeksekusi handler ini (root path)
        handler: getHandler   // Menggunakan fungsi getHandler dari handler.js sebagai handler untuk rute ini
    },
    {
        method: 'GET',        // Menetapkan metode HTTP untuk rute ini (GET)
        path: '/users/{users?}',            // Menetapkan path atau URL yang akan mengeksekusi handler ini (root path)
        handler: getUser   // Menggunakan fungsi getHandler dari handler.js sebagai handler untuk rute ini
    },
    {
        method: 'GET',        // Menetapkan metode HTTP untuk rute ini (GET)
        path: '/{lost*}',            // Menetapkan path atau URL yang akan mengeksekusi handler ini (root path)
        handler: getLost   // Menggunakan fungsi getHandler dari handler.js sebagai handler untuk rute ini
    },
    {
        method: 'GET',        // Menetapkan metode HTTP untuk rute ini (GET)
        path: '/location',            // Menetapkan path atau URL yang akan mengeksekusi handler ini (root path)
        handler: getLocation   // Menggunakan fungsi getHandler dari handler.js sebagai handler untuk rute ini
    },
    {
        method: 'post',        // Menetapkan metode HTTP untuk rute ini (GET)
        path: '/login',            // Menetapkan path atau URL yang akan mengeksekusi handler ini (root path)
        handler: postLogin   // Menggunakan fungsi getHandler dari handler.js sebagai handler untuk rute ini
    }
];

// Mengekspor array rute agar dapat digunakan dalam konfigurasi server Hapi
module.exports = routes;
