import React, {Component} from 'react';

class RefsDemo extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef()

		this.callbackRef = null
		this.setCallbackRef = element => {
			this.callbackRef = element
		}
	}

	componentDidMount() {
		if (this.callbackRef)
		{
			this.callbackRef.focus()
		}
		/*this.inputRef.current.focus()
		console.log(this.inputRef)*/
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef}/>
				<input type='text' ref={this.setCallbackRef}/>
				<button onClick={this.clickHandler}>Нажми</button>
			</div>
		);
	}
}

export default RefsDemo;