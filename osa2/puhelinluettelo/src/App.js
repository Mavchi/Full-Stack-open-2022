import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([{ 
		name: 'Arto Hellas',
		number: '04580984'
	}
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

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


	return (
		<div>
			<h2>Phonebook</h2>
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
			{persons.map(person => (
				<div key={person.name}>
					{person.name} {person.number}
				</div>
			))}
		</div>
	)

}

export default App