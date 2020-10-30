// 2.9
import React, { useState } from 'react'

const Person = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

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
      <p>
          filter shown with <input onChange={HandleFilterChange}/>>
      </p>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={HandleNameChange}/><br/>
          number: <input value={newNumber} onChange={HandleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {phonesToShow.map( person =>
            <Person key={person.name} person={person}/> 
        )}
      </div>
    </div>
  )

}

export default App