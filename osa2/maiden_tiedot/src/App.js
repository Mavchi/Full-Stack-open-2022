import axios from 'axios'
import { useState, useEffect } from 'react'

import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(0)

  const getAllCountries = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fullfilled')
        setAllCountries(response.data)
      })
  }
  useEffect(getAllCountries, [])

  const handleFilterChange = (event) => {
    //console.log(allCountries)
    setFilter(event.target.value)
    setSelectedCountry(0)
  }

  const handleChoiseOfCountry = (country) =>{
    // console.log('choise made', country.name.common)
    setSelectedCountry(country)
  }
  

  return (
    <div>
      <div>
        find countries 
        <input value={filter} onChange={handleFilterChange} />  
      </div>
      {
        selectedCountry === 0
          ? <Countries allCountries={allCountries} filter={filter} handleChoiseOfCountry={handleChoiseOfCountry}/>
          : <Country country={selectedCountry}/>
      }
      
    </div>
  );
}

export default App;
