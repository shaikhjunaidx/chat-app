import React, { Component } from "react";
import './ChatInput.scss'

class ChatInput extends Component {
    render() {
        return (
            <div className="chatInput">
                <input onKeyDown={this.props.send} placeholder="Type a message... Hit Enter to send" type="text" />
            </div>
        )
    }
}

export default ChatInput;