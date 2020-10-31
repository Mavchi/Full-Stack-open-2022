// 2.11+
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Person = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    )
}

const Persons = ({ persons }) => {
    return (
      <div>
        {persons.map( person =>
            <Person key={person.name} person={person}/> 
        )}
      </div>
    )
}

const Filter = ({ onChange }) => {
    return (
        <p>
            filter shown with <input onChange={onChange} />
        </p>
    )
}

const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.HandleNameChange}/><br/>
          number: <input value={props.newNumber} onChange={props.HandleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    ) 
}

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const HandleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const HandleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const HandleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addPerson = (event) =>{
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber
      }

      if (newName.length===0 || newNumber.length===0){
          alert('Name and number must not be empty!')
      } else {
        let names = persons.map( person => person.name)
        // Lisätään jos ei ole valmiiksi taulukossa
        if (names.includes(personObject.name)){
          setNewName('')
          alert(`${newName} is already added to phonebook`)
        } else {
          setPersons(persons.concat(personObject))
          setNewName('')
        }
        setNewNumber('')
      }
  }

  // Mitkä numerot näytetään
  const phonesToShow = (newFilter.length === 0) 
    ? persons 
    : persons.filter( person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={HandleFilterChange}/>
      <h2>Add new</h2>
      <PersonForm addPerson={addPerson} newName={newName} HandleNameChange={HandleNameChange} newNumber={newNumber} HandleNumberChange={HandleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={phonesToShow}/>
    </div>
  )

}

export default App