import React, { Component } from "react";
import './Message.scss'


class Message extends Component {
    constructor(props) {
        super(props);
        let parsedMessage = JSON.parse(this.props.message);
        this.state = {
            message: parsedMessage
        }
    }

    render() {
        return (
            <div className="message">
                {this.state.message.body}
            </div>
        );
    };
}

export default Message;