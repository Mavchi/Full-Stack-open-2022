import { useState, useEffect } from 'react'

import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Contact from './components/Contact'

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

  const handleDelete = id => {
    console.log('removing ', id)
    personService
      .deleteId(id)
      .then(returnedPersons => {
        console.log(returnedPersons)
        const newPersons = persons.filter(p => p.id !== id)
        setPersons(newPersons)
      })
  }

  const showNumbers = (filter.length===0)
		? persons
		: persons.filter(contact => contact.name.toLowerCase().includes(filter))


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
      {showNumbers.map(number => 
        <Contact 
          key={number.id}
          person={number}
          handleDelete={() => handleDelete(number.id)}
        />
      )}
    </div>
  )

}

export default App
/*

      <NumberList 
        persons={persons} 
        filter={filter} 
        handleDelete={handleDelete}  
      />
*/