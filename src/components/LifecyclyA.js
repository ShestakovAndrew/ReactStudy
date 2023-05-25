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

	componentDidMount() {
		console.log('LifecyclyA componentDidMount')
	}

	static getDerivedStateFromProps() {
		console.log('LifecyclyA getDerivedStateFromProps')
		return null
	}

	render() {
		console.log('LifecyclyA render')
		return(
			<div>
				<div>Lifecycly A</div>
				<LifecyclyB />
			</div>
		)
	}
}

export default LifecyclyA;