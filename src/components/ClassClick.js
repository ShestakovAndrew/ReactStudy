import React, {Component} from 'react';

class ClassClick extends Component {

	clickHandler() {
		console.log('Нажатие на кнопку')
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Нажми на меня</button>
			</div>
		)
	}
}

export default ClassClick;