import React, {Component} from 'react';

class UserGreeting extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false
		}
	}

	render() {

		return this.state.isLoggedIn && <div>Привет, Андрей!</div>

		/*return(
			this.state.isLoggedIn ?
			<div>Привет, Андрей!</div> :
			<div>Привет, гость!</div>
		)*/

		/*let message
		if (this.state.isLoggedIn) {
			message = <div>Привет, Андрей!</div>
		} else {
			message = <div>Привет, гость!</div>
		}
		return <div>{message}</div>*/

		/*if (this.state.isLoggedIn)
		{
			return <div>Привет, Андрей!</div>
		}
		else
		{
			return <div>Привет, гость!</div>
		}*/
	}
}

export default UserGreeting;