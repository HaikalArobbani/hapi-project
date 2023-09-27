// Fungsi getHandler adalah handler untuk permintaan HTTP GET.
// Ini menerima dua parameter:
// - request: Objek yang berisi informasi tentang permintaan HTTP yang masuk.
// - h: Objek response toolkit yang digunakan untuk membangun respons HTTP.

const getHandler = (request, h) => {
    return h.file('./welcome.html')
}
const getUser = (request, h) => {
if(request.params.users){
    return `Hello ${request.params.users}`
} else {
    return `Hello Stranger`
}
}
const getLost = (request, h) => {
    return "<h1> You just lost, go back bro </h1>";
}
const getLocation = (request, h) => {
    const location = request.location.ip
    return `your ip is ${location} `
}
const postLogin = (request, h) => {
    console.log(request.payload.username)
    console.log(request.payload.password)

    return "hi"

}
// Mengeskpor fungsi getHandler agar bisa digunakan oleh rute atau modul lain dalam aplikasi.
module.exports = {getHandler,getUser,getLost,getLocation,postLogin};
  