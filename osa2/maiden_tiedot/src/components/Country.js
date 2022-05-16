import React, { useState } from 'react'
import axios from 'axios'

const Country = ({ countries }) => {
    const [showCountry, setCountry] = useState(null)
    const [weather, setWeather] = useState(null)
    const api_key = process.env.REACT_APP_API_KEY

    const downloadWeather = (country) => {
      //console.log('downloading weather', weather)
      axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`)
        .then( response => {
            setWeather(response.data)
        })
        .catch( error => 
            console.log('couldnt download weather data')
        )
    }

    const handleNewCountry = (country) => {
      //console.log('trying to change country', country.name)
      setCountry(country)
      downloadWeather(country)
    }
  
    if (countries.length === 0){
      return (
        <span>No matches!</span>
      )
    }
    if (countries.length > 10 ){
      return (
        <span>Too many matches, specify another filter</span>
      )
    }
    if (countries.length ===1 && countries[0] !== showCountry){
      setWeather(null)
      downloadWeather(countries[0])
      handleNewCountry(countries[0])
    }

    return (
      <div>
        {countries.map( country => 
          <div key={country.name}>
            {country.name}
            <button onClick={() => handleNewCountry(country)}>show</button>
          </div>
        )}
        <ShowCountry country={showCountry} weather={weather}/>
      </div>
    )
}

const ShowCountry = ({ country, weather }) => {

  if (country === null || weather === null){
    return null
  }

  /*if( weather !== null){ 
    console.log(weather)
  }*/
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
          <li key={language.name}>{language.name}</li> 
        ))}
      </ul>
    </div>
    <img src={country.flag} alt={country.name} width='150px' height='150px'/>

    <h3>Weather in {weather.location.name}</h3>
    <p>
      <strong>temperature: </strong>{weather.current.temperature} Celcius<br/>
      <img height='100px' width='100px' alt='type of weather' src={weather.current.weather_icons[0]}/><br/>
        <strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
    </p>
  </div>
  )}

export default Country