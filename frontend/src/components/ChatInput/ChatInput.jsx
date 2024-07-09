import React, { Component } from "react";
import './ChatInput.scss';

class ChatInput extends Component {
    render() {
        return (
            <div className="chatInput">
                <input onKeyDown={this.props.handleKeyPress} placeholder="Type a message... Hit Enter to send" />
            </div>
        );
    };
}

export default ChatInput;