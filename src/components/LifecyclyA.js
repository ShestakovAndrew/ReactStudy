import React, {Component} from 'react';
import LifecyclyB from "./LifecyclyB";

class LifecyclyA extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Андрей'
		}

		console.log('LifecyclyA конструктор')
	}

	static getDerivedStateFromProps() {
		console.log('LifecyclyA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecyclyA componentDidMount')
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('LifecyclyA shouldComponentUpdate')
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecyclyA getSnapshotBeforeUpdate')
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecyclyA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Codevolution'
		})
	}

	render() {
		console.log('LifecyclyA render')
		return(
			<div>
				<div>Lifecycly A</div>
				<button onClick={this.changeState}>Изменить состояние</button>
				<LifecyclyB />
			</div>
		)
	}
}

export default LifecyclyA;