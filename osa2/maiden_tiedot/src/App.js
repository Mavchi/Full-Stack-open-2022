import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(undefined)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  useEffect(() => {
    // if only one country is showing in filtered list, then
    // it is to be viewed by the user
    const filteredResult = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    if (filteredResult.length === 1) {
      setSelectedCountry(filteredResult[0])
    } else {
      setSelectedCountry(undefined)
    }
  }, [countries, filter])

  const handleValueOfFilter = (event) => setFilter(event.target.value)

  const handleChoiseOfCountry = (country) => {
    return () => setSelectedCountry(country)
  }

  const filteredCountries = filter.length === 0
    ? []
    : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Filter value={filter} handleChange={handleValueOfFilter} />
      {filteredCountries.length > 0 && !selectedCountry
        ? <Countries countries={filteredCountries} handleChoise={handleChoiseOfCountry} />
        : <Country country={selectedCountry} />
      }
    </div>
  );
}

export default App;
