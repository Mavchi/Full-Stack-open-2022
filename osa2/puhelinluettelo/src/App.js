import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])

	const [newName, setName] = useState('')
	const [newNumber, setNumber] = useState('')
	const [filter, setFilter] = useState('')

	useEffect(() => {
		//console.log('effect')

		const eventHandler = response =>{
			//console.log('promise fullfilled')
			setPersons(response.data)
		}

		const promise = axios.get('http://localhost:3001/persons')
		promise.then(eventHandler)
	}, [])

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