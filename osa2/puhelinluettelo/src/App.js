import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/personService'

const App = () => {
	const [persons, setPersons] = useState([])

	const [newName, setName] = useState('')
	const [newNumber, setNumber] = useState('')
	const [filter, setFilter] = useState('')

	useEffect(() => {
		personService
			.getAll()
			.then(initialPersons => {
				setPersons(initialPersons)
			})
			.catch(error => {
				alert("Couldn't download data from server")
			})
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
			personService
				.create(newPerson)
				.then(returnedPersons => {
					setPersons(persons.concat(returnedPersons))
					setName('')
					setNumber('')
				})
				.catch(error => {
					console.log('Coulndt add person to db')
				})
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