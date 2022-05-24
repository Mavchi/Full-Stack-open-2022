import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const api_key = process.env.REACT_APP_API_KEY

    const downloadWeather = (country) => {
        //console.log('downloading weather', weather)
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}`)
            .then(response => {
                setWeather(response.data)
            })
            .catch(error =>
                console.log('couldnt download weather data')
            )
    }

    downloadWeather(country)
    console.log(weather)

    console.log('country selected: ', country)
    return (
        <div>
            <h1>{country.name.common}</h1>
            capital {country.capital}<br />
            area {country.area}
            <br />
            <h4>Languages:</h4>
            {JSON.stringify(country.languages)}
            <br />
            <br />
            <img src={country.flags.png} alt="flag of a country" />
            <h3>Weather in {weather.location.name}</h3>
            <p>
                <strong>temperature: </strong>{weather.current.temperature} Celcius<br />
                <img height='100px' width='100px' alt='type of weather' src={weather.current.weather_icons[0]} /><br />
                <strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
            </p>
        </div>
    )
}

export default Country

// {JSON.stringify(country.languages) }