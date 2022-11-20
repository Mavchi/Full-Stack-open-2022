import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=> {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => console.log("Couldn't download contact information of people"))
  }, [])

  const handleValueOfName = (event) => setNewName(event.target.value)
  const handleValueOfNumber = (event) => setNewNumber(event.target.value)
  const handleValueOFilter = (event) => setNameFilter(event.target.value)
  const handleRemovingPerson = (id) => {
    return () => {
      personService
        .remove(id)
        .then(response => {
          const newError = {
            text: `Person ${persons.find(person => person.id === id).name} was removed`,
            type: 'success'
          }
          setPersons(persons.filter(person => person.id !== id))
          setMessage(newError)
          setTimeout(() => setMessage(null), 5000)
        })
        .catch(error => {
          const newError = {
            text: `Information of ${persons.find(person => person.id === id).name} was already removed`,
            type: 'error'
          }
          setPersons(persons.filter(person => person.id !== id))
          setMessage(newError)
          setTimeout(() => setMessage(null), 5000)
        })
    }
  }

  const handleAddingPerson = (event) => {
    event.preventDefault()
    const newPerson = { 
      name: newName, 
      number: newNumber,
      id: Math.max(persons.map(person => person.id))+1
    }
    
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is alredy added to phonebook, replace the old number with a new one?`)) {
        newPerson.id = persons.find(person => person.name === newName).id
        personService
          .update(newPerson)
          .then(returnedPerson => {
            const newMessage = {
              text: `Updated number of ${returnedPerson.name}`,
              type: 'success'
            }
            setMessage(newMessage)
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setTimeout(() => setMessage(null), 5000)
          })
          .catch(error => {
            const newMessage = {
              text: `Information of ${newPerson.name} has already been removed from server`,
              type: 'error'
            }
            setMessage(newMessage)
            setTimeout(() => setMessage(null), 5000)
            setPersons(persons.filter(person => person.name !== newPerson.name))
          })
      }
      return
    }

    personService
      .add(newPerson)
      .then(returnedPerson => {
        const newMessage = {
          text: `Added ${returnedPerson.name}`,
          type: 'success'
        }
        setMessage(newMessage)
        setTimeout(() => setMessage(null), 5000)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error =>{
        const newMessage = {
          text: `Couldn't add ${newPerson.name}`,
          type: 'error'
        }
        setMessage(newMessage)
        setTimeout(() => setMessage(null), 5000)
      })
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={nameFilter} handleChange={handleValueOFilter} />
      <h2>add a new</h2>
      <PersonForm  
        name={newName} 
        handleChangeOfName={handleValueOfName} 
        number={newNumber}
        handleChangeOfNumber={handleValueOfNumber}
        handleAddingPerson={handleAddingPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleRemovingPerson} />
    </div>
  )
}

export default App