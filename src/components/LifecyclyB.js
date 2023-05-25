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

	render() {
		console.log('LifecyclyB render')
		return <div>LifecyclyB</div>
	}
}

export default LifecyclyB;