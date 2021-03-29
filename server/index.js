// Create a http server
const http = require("http").createServer()

// Create a socket connection
const io = require('socket.io')(http, {
    cors: {origin: "*"}
})


// Listen to a connection from the client
io.on('connection', (socket) => {
    console.log('Connecting a user...')
  
    // Listen on message event
    socket.on('message', (message) => {
        console.log(message)

        // Broadcast even to everyone
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`)

    })    
})


// Let the server Listen on port 8080
http.listen(8080, () => console.log('http server listening on localhost:8080'))