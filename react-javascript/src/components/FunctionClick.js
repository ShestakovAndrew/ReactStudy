import React from 'react';

function FunctionClick() {
	function clickHandler() {
		console.log('Кнопка нажата')
	}

	return (
		<div>
			<button onClick={clickHandler}>Нажать</button>
		</div>
	)
}

export default FunctionClick;