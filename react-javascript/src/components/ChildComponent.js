import React from 'react';

function ChildComponent(props) {
	return (
		<div>
			<button onClick={() => props.greetHandler('ребёнок')}>Привет родитель</button>
		</div>
	);
}

export default ChildComponent;