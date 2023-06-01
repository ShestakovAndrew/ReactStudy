import React, {Component} from 'react'

class LifecyclyB extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Андрей'
		}

		console.log('LifecyclyB конструктор')
	}

	componentDidMount() {
		console.log('LifecyclyB componentDidMount')
	}

	static getDerivedStateFromProps() {
		console.log('LifecyclyB getDerivedStateFromProps')
		return null
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('LifecyclyB shouldComponentUpdate')
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecyclyB getSnapshotBeforeUpdate')
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecyclyB componentDidUpdate')
	}

	render() {
		console.log('LifecyclyB render')
		return <div>LifecyclyB</div>
	}
}

export default LifecyclyB;