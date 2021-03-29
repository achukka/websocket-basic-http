const socket = new WebSocket('ws://localhost:8080')

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log(`Message received from server: ${data}`)
}

document.querySelector('button').onclick = () => {
    socket.send('Hello user')
}