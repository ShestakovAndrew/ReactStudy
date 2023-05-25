import React from 'react'
import Person from "./Person";

function NameList() {
	//const names = ['Андрей', 'Рома', 'Таня']
	const persons = [
		{
			id: 1,
			name: 'Андрей',
			age: 22,
			skill: 'React'
		},
		{
			id: 2,
			name: 'Рома',
			age: 21,
			skill: 'Angular'
		},
		{
			id: 3,
			name: 'Таня',
			age: 25,
			skill: 'Vue'
		}
	]
	const personList = persons.map(person => <Person person={person}></Person>)

	return <div>{personList}</div>
}

export default NameList;