package websocket

import (
	"fmt"
	"log"
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
	Mu   sync.Mutex
}

type Message struct {
	Type int    `json:"type"`
	Body string `json:"body"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		messageType, body, err := c.Conn.ReadMessage()

		if err != nil {
			log.Println(err)
			return
		}

		message := Message{
			Type: messageType,
			Body: string(body),
		}

		c.Pool.Broadcast <- message

		fmt.Printf("Message received: +%v\n", message)

	}
}
