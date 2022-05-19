import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas' }
	])
	const [newName, setNewName] = useState('')

	const handleAddNew = (event) => {
		//console.log('handleAddNew')
		event.preventDefault()

		// check if name already included in a list
		if (persons.find(p => p.name === newName)){
		// name is found in a list of names
			alert(`${newName} is already added to phonebook`)
		} else {
		// new name to be added to a list of names
			const newPerson = { name: newName }
			setPersons(persons.concat(newPerson))
			setNewName('')
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
						onChange={(event) => setNewName(event.target.value)} />
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
					{person.name}
				</div>
			))}
		</div>
	)

}

export default App