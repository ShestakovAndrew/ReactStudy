import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			parentName: 'Родитель'
		}

		this.greetParent = this.greetParent.bind(this)
	}

	greetParent(childName) {
		alert(`Привет ${this.state.parentName}, от ${childName}`)
	}

	render() {
		return <div>
			<ChildComponent greetHandler={this.greetParent}/>
		</div>
	}
}

export default ParentComponent;