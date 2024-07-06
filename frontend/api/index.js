var socket = new WebSocket('ws://localhost:8080/ws');

let connect = (cb) => {
    console.log("Connecting")

    socket.onopen = () => {
        console.log("Successfully connected");
    }

    socket.onmessage = (message) => {
        console.log("Message from websocket: ", message);
    }

    socket.onclose = (event) => {
        console.log("Socket closed connection: ", event);
    }

    socket.onerror = (error) => {
        console.log("Socket error: ", error);
    }
};

let sendMessage = (message) => {
    console.log("Sending message: ", message);
    socket.send(message);
}

export { connect, sendMessage };