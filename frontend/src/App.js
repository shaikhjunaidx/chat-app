import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import { connect, sendMessage } from './api';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: []
		}
	}

	componentDidMount() {
		connect((message) => {
			console.log("New Message")
			this.setState(prevState => ({
				chatHistory: [...prevState.chatHistory, message]
			}))

			console.log(this.state);

		});
	}

	send(event) {
		if (event.keyCode === 13) {
			sendMessage(event.target.value);
			event.target.value = "";
		}
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<ChatHistory chatHistory={this.state.chatHistory} />
				<ChatInput send={this.send} />
			</div>
		);
	}
}

export default App;