import React, {Component} from 'react';

class EventBind extends Component {

	constructor(props) {
		super(props);

		this.state = {
			message: 'Привет'
		}
		//this.clickHandler = this.clickHandler.bind(this)
	}

	/*	clickHandler() {
		this.setState({
			message: 'Пока'
		})
		console.log(this)
	}*/

	clickHandler = () => {
		this.setState({
			message: 'Пока!'
		})
	}

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/*<button onClick={this.clickHandler.bind(this)}>Нажать</button>*/}
				{/*<button onClick={() => this.clickHandler()}>Нажать</button>*/}
				<button onClick={this.clickHandler}>Нажать</button>
			</div>
		)
	}
}

export default EventBind;