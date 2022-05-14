import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    //console.log('fetching')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setAllCountries(response.data)
    })
    //console.log(allCountries)
  }, [])

  const changeFilter = (event) => {
    //console.log(event.target.value)
    return (
      setFilter(event.target.value)
    )
  }

  return (
    <div>
      <Header 
        countries={allCountries} 
        filter={filter}
        changeFilter={changeFilter}
        /> 
    </div>
  )
}

export default App;
