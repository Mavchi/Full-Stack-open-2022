import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/personService'

const App = () => {
	const [persons, setPersons] = useState([])

	const [newName, setName] = useState('')
	const [newNumber, setNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [successNotification, setSuccessNotification] = useState(null)
	const [errorNotification, setErrorNotification] = useState(null)

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
			if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
				const oldData = persons.find(p => p.name === newName)
				const updatedPerson = {...oldData, number: newNumber}
				personService
					.update(updatedPerson.id, updatedPerson)
					.then(returnedPerson => {
						setPersons(persons.map(person => person.id !== updatedPerson ? person : returnedPerson))
						setName('')
						setNumber('')
						// tell about success
						setSuccessNotification(`Updated number of ${returnedPerson.name}`)
						setTimeout(() => {
							setSuccessNotification(null)
						}, 5000)
					})
					.catch(error => {
						console.log('Couldnt update', updatedPerson.name)
					})
				//console.log(newName, 'to be updated with ', newNumber)
			}
			
		} else {
		// new name to be added to a list of names
			const newPerson = { 
				name: newName,
				number: newNumber,
			}
			personService
				.create(newPerson)
				.then(returnedPerson => {
					setPersons(persons.concat(returnedPerson))
					setName('')
					setNumber('')
					// tell about success
					setSuccessNotification(`Added ${returnedPerson.name}`)
					setTimeout(() => {
						setSuccessNotification(null)
					}, 5000)
				})
				.catch(error => {
					console.log('Coulndt add person to db')
				})
		}
	}

	const handleDelete = (person) => {
		//console.log(person.id, " to be deleted")
		if (window.confirm(`Delete ${person.name} ?`)) {
			personService
				.remove(person.id)
				.then(response => {
					console.log('deleted, r: ', response)
					setPersons(persons.filter(p => p.id !== person.id))
					// tell about success
					setSuccessNotification(`Deleted ${person.name}`)
					setTimeout(() => {
						setSuccessNotification(null)
					}, 5000)
				})
				.catch(error => {
					// tell about failure
					setErrorNotification(`Infomation of ${person.name} has already been removed from server`)
					setTimeout(() => {
						setErrorNotification(null)
					}, 5000)
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

	//console.log(filter)
	const shownContacts = filter.length === 0
		? persons
		: persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLowerCase()))

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification type={'success'} message={successNotification} />
			<Notification type={'error'} message={errorNotification} />
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
			<Persons 
				persons={shownContacts} 
				handleDelete={handleDelete}
			/>
		</div>
	)

}

export default App