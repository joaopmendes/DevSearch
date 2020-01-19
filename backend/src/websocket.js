const socketio = require("socket.io")

exports.setupWebSocket = function (server) {
    const io = socketio(server);
    console.log("Sockets in server running")
    io.on("connection", socket => {
        console.log(socket.id)
    })
}