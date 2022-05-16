// 2.13
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  
  // download all countries data from server
  useEffect(() => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then( response => {
          setAllCountries(response.data)
        })
  }, [])

  const handleNewFilter = (event) => {
    return (
      //setNewFilter(event.target.value)
      setShowCountries(allCountries.filter( country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
    )
  }

  return (
    <div>
      find countries <input onChange={handleNewFilter}/><br/>
      <Country countries={showCountries}/>
    </div>
  )
}

export default App