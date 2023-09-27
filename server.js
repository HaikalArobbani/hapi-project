// Mengimpor modul Hapi
const Hapi = require('@hapi/hapi');

// Mengimpor definisi rute dari berkas './source/routes'
const routes = require('./source/routes');

// Fungsi untuk menginisialisasi server Hapi
const init = async () => {
    // Membuat instance server Hapi
    const server = Hapi.Server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 4000 // Menetapkan host dan port server
    });
    await server.register([{
        plugin:require ("hapi-geo-locate"),
        Option : {
            enabledByDefault : true
        }
    }, {
        plugin:require ("@hapi/inert"),


    }])

    // Menambahkan rute-rute yang telah didefinisikan
    server.route(routes);

    // Memulai server
    await server.start();

    // Menampilkan pesan bahwa server telah berjalan
    console.log(`Server berjalan pada ${server.info.uri}`);
}

// Memanggil fungsi init untuk memulai server
init();
