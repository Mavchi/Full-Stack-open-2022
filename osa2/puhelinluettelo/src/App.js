import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
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
			setNewName('')
			setNewNumber('')
		}
	}
	console.log(filter)
	const shownContacts = filter.length == 0
		? persons
		: persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLowerCase()))

	return (
		<div>
			<h2>Phonebook</h2>
			filter shown with 
			<input 
				value={filter}
				onChange={(event) => setFilter(event.target.value)}
			/>

			<h2>add a new</h2>
			<form>
				<div>
					name:
					<input
						value={newName}
						onChange={(event) => setNewName(event.target.value)} 
					/><br />
					number:
					<input
						value={newNumber}
						onChange={(event) => setNewNumber(event.target.value)} 
					/>
				</div>
				<div>
					<button type="submit" onClick={handleAddNew}>
							add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{shownContacts.map(person => (
				<div key={person.name}>
					{person.name} {person.number}
				</div>
			))}
		</div>
	)

}

export default App