import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import PersonForm from './components/PersonForm'
import NumberList from './components/NumberList'

import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect( () => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
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