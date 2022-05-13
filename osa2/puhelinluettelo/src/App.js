import { useState } from 'react'

const Persons = ({persons}) => {
  console.log(persons)
  return (
    persons.map( person => 
      <p>{person.name}</p>
    )
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleChangeInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChangeInput}/>
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