import { useState } from 'react'

const Persons = ({persons}) => {
  //console.log(persons)
  return (
    persons.map( person => 
      <p key={person.name}>{person.name}</p>
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
    // see if input already stored
    let count = persons.filter(person => person.name===newName)
    if (count.length > 0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
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