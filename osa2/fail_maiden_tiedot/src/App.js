import {useState, useEffect} from 'react'
import axios from 'axios'

import Country from './components/Country'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])

  useEffect(() => {
    //console.log('fetching')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setAllCountries(response.data)
    })
    //console.log(allCountries)
  }, [])

  // input-field only
  const handleNewFilter = (event) => {
    //console.log(event.target.value)
    return (
      setShowCountries(allCountries.filter( country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
    )
  }


  return (
    <div>
      find countries <input onChange={handleNewFilter}/><br />
      <Country countries={showCountries} />
    </div>
  )
}

export default App
/*

  const filteredCountries = filter.length === 0
  ? allCountries
  : allCountries.filter(country => country.name.common.toLowerCase().includes(filter))

<div>
  <Header 
    countries={filteredCountries} 
    filter={filter}
    changeFilter={changeFilter}
    setCountry={setCountry}
    />
  {Object.keys(selectedCountry).length === 0
    ? <ShowCountryData country={filteredCountries[0]} />
    : null
  }
</div>
*/