import React, {Component} from 'react';
import MemoComp from "./MemoComp";

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Андрей'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Андрей'
			})
		}, 2000)
	}

	render() {
		console.log("ParentComp render")
		return (
			<div>
				Parent Component
				<MemoComp name={this.state.name} />
				{/*<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />*/}
			</div>
		);
	}
}

export default ParentComp;