import { useState } from 'react'

import Header from './components/Header'
import PersonForm from './components/PersonForm'
import NumberList from './components/NumberList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const handleNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    // see if name already stored
    let count = persons.filter(person => person.name === newName)
    if (count.length > 0) {
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

  const handleChangeFilter = (event) => {
    //console.log(event.target.value)
    return (
      setNewFilter(event.target.value)
    )
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
      <Header input_value={filter} handleChange={handleChangeFilter} />
      <PersonForm 
        newName={newName}  
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
        handleNewName={handleNewName}
      />
      <NumberList persons={persons} filter={filter} />
    </div>
  )

}

export default App