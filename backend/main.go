package main

import (
	"fmt"
	"net/http"

	"github.com/shaikhjunaidx/chat-app/pkg/websocket"
)

func handleWebSocketRequest(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Websocket endpoint reached")

	conn, err := websocket.UpgradeHTTPToWebSocket(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setUpRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		handleWebSocketRequest(pool, w, r)
	})
}

func main() {
	fmt.Println("Junaid's Golang Chat Project")

	setUpRoutes()

	http.ListenAndServe(":8080", nil)
}
