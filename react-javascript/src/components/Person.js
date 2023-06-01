import React from 'react';

function Person({person}) {
	return (
		<div>
			<h2>
				Меня зовут {person.name}, мне {person.age} лет, я изучаю {person.skill}
			</h2>
		</div>
	);
}

export default Person;