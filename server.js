const io = require("socket.io")(process.env.PORT || 52300)

console.log("Server has started working")

io.on('connection', function(socket) {
console.log("Connected")

}) 

io.on('disconnection', function(socket) {

    console.log("Disconnected")
})