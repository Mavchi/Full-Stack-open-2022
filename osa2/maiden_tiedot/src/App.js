// 2.12
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ShowCountries = ({ countries, onClick }) => {
  if (countries.length > 10 ){
    return (
      <span>Too many matches, specify another filter</span>
    )
  }

  if (countries.length <10 && countries.length > 1){
    return (
      <div>
        {countries.map( country => (
          <div key={country.name}>
            <ShowCountryName  name={country.name}/>
            <button onClick={() => onClick(country)}>
              show
            </button>
          </div>
        ))}
      </div>
    )
  }
  
  if (countries.length === 0){
    return (
      <span>No matches!</span>
    )
  }

  return (
    <ShowCountry country={countries[0]}/>
  )
}

const ShowCountryName = ({ name }) => {
  return (
    <span>{name}</span>
  )
}

const ShowCountry = ({ country }) => {
  //console.log('ShowCountry', country)
  if (country === undefined){
    return (
      <span></span>
    )
  }

  return( 
  <div>
    <h1>{country.name}</h1>
    <p>
      capital {country.capital}<br/>
      population {country.population}
    </p>
    <div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map( language => (
          <ShowLanguage key={language.name} language={language.name}/>
        ))}
      </ul>
    </div>
    <img src={country.flag} alt={country.name} width='300px' height='300px'/>
  </div>
)}

const ShowLanguage = ({ language }) => {
  return (
    <li>{language}</li>
  )
}

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [showCountry, setCountry] = useState()
  //const [newFilter, setNewFilter] = useState('')

  
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

  const handleNewCountry = (country) => {
    return (
    setCountry(country)
  )}

  return (
    <div>
      find countries <input onChange={handleNewFilter}/><br/>
      <ShowCountries countries={showCountries} onClick={handleNewCountry}/>
      <ShowCountry country={showCountry}/>
    </div>
  )
}

export default App