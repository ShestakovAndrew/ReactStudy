import React, {Component} from 'react';

class ClickCounterTwo extends Component {

	render() {
		const {count, incrementCount} = this.props
		return (
			<button onClick={incrementCount}>Нажата {count} раз</button>
		);
	}
}

export default ClickCounterTwo;