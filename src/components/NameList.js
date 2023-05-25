import React from 'react'

function NameList() {
	const names = ['Андрей', 'Рома', 'Таня', 'Андрей']
	/*const persons = [
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
	]*/
	//const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
	const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

	return <div>{nameList}</div>
}

export default NameList;