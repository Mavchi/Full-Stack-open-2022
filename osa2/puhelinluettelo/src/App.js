import { useState } from 'react'

const Persons = ({persons}) => {
  //console.log(persons)
  return (
    persons.map( person => 
      <p key={person.name}>{person.name} {person.number}</p>
    )
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    // see if name already stored
    let count = persons.filter(person => person.name===newName)
    if (count.length > 0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChangeName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleChangeNumber = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>
          name: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button onClick={handleNewName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )

}

export default App