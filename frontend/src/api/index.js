var webSocketConnection = new WebSocket('ws://localhost:8080/ws');

let setupWebSocketConnection = (handleMessageReceived) => {
    console.log("Connecting")

    webSocketConnection.onopen = () => {
        console.log("Successfully connected");
    }

    webSocketConnection.onmessage = (message) => {
        console.log("Message from websocket: ", message);
        handleMessageReceived(message)
    }

    webSocketConnection.onclose = (event) => {
        console.log("webSocketConnection closed connection: ", event);
    }

    webSocketConnection.onerror = (error) => {
        console.log("webSocketConnection error: ", error);
    }
};

let sendMessage = (message) => {
    console.log("Sending message: ", message);
    webSocketConnection.send(message);
}

export { setupWebSocketConnection, sendMessage };