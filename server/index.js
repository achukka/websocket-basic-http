const WebSocket = require('ws')
const server = new WebSocket.Server({port: '8080'})

server.on('connection', socket => {
    socket.on('message', (message) => {
        console.log(message);
        console.log(socket);
        socket.send(`Ack ! ${message}`)
        // server.emit('message', `${socket.id.substr(0, 2)} said ${messsage}`)
    })
})




 