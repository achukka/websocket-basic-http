// Create a socket
const socket = io('ws://localhost:8080')

// Listen for messages
socket.on('message', text => {    
    const element = document.createElement('li')
    element.innerText = text
    document.getElementById("messages").appendChild(element)
})

document.querySelector('button').onclick = () => {
    const text = document.getElementById('messageinput').value
    socket.emit('message', text)
}