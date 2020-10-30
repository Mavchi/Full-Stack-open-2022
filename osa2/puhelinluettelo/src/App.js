// 2.7
import React, { useState } from 'react'

const Person = ({ person }) => {
    return (
        <p>
            {person.name}
        </p>
    )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const HandlePhoneChange = (event) => {
      setNewName(event.target.value)
  }

  const addPhone = (event) =>{
      event.preventDefault()
      const personObject = {
          name: newName
      }

      let names = persons.map( person => person.name)
      // Lisätään jos ei ole valmiiksi taulukossa
      if (names.includes(personObject.name)){
        setNewName('')
        alert(`${newName} is already added to phonebook`)
        } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={HandlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map( person =>
            <Person key={person.name} person={person}/> 
        )}
      </div>
    </div>
  )

}

export default App