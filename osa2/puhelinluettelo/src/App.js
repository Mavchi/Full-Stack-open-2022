import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
	const [newName, setName] = useState('')
	const [newNumber, setNumber] = useState('')
	const [filter, setFilter] = useState('')

	const handleAddNew = (event) => {
		//console.log('handleAddNew')
		event.preventDefault()

		// check if name already included in a list
		if (persons.find(p => p.name === newName)){
		// name is found in a list of names
			alert(`${newName} is already added to phonebook`)
		} else {
		// new name to be added to a list of names
			const newPerson = { 
				name: newName,
				number: newNumber,
			}
			setPersons(persons.concat(newPerson))
			setName('')
			setNumber('')
		}
	}

	const setNewFilter = (event) => {
		//console.log('setting new value to filter', filter)
		setFilter(event.target.value)
	}

	const setNewName = (event) => {
		setName(event.target.value)
	}

	const setNewNumber = (event) => {
		setNumber(event.target.value)
	}

	console.log(filter)
	const shownContacts = filter.length === 0
		? persons
		: persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLowerCase()))

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter 
				value={filter}
				handleChange={(e) => setNewFilter(e)}
			/>

			<h3>add a new</h3>
			<PersonForm 
				newName={newName}
				newNumber={newNumber}
				handleChangeOfName={((e) => setNewName(e))}
				handleChangeOfNumber={((e) => setNewNumber(e))}
				handleAddNew={handleAddNew}
			/>
			
			<h2>Numbers</h2>
			<Persons persons={shownContacts} />
		</div>
	)

}

export default App