
import socketio from "socket.io-client"

const socket = socketio("http://192.168.1.67:8000");


export function connect () {
    console.log("I Got Called")
    socket.connect()
}

export function disconnect () {
    if(socket.connnected) socket.disconnect()
}

