import React, { Component } from "react";

class Message extends Component {

	constructor() {
		super()
		this.state = {
			message: 'Привет Андрей'
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMessage()}>Подписаться</button>
			</div>
		)
	}

	changeMessage() {
		this.setState({
			message: 'Спасибо за подписку!'
		})
	}
}

export default Message