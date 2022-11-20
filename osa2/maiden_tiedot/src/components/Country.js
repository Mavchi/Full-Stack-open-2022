import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	const [weatherData, setWeatherData] = useState(null)
	
	useEffect(() => {
		if (!country) {
			return
		}
		const lat = country.latlng[0]
		const lon = country.latlng[1]
		const API_key = process.env.REACT_APP_API_KEY
		const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
		
		axios
			.get(baseUrl)
			.then(response => setWeatherData(response.data))
	}, [country])
	
	if (!country || !weatherData) {
		return
	}

	return (
		<div>
			<h2>{country.name}</h2>
			capital {country.capital} <br />
			area {country.area} <br />
			<h3>languages</h3>
			<ul>
				{country.languages.map((language,i) =>
					<li key={i}>{language.name}</li>
				)}
			</ul>
			<img src={country.flags.png} alt={`Flag of ${country.name}`} />

			<h3>Weather in {country.capital}</h3>
			temperature {weatherData.current.temp} Celcius <br />
			<img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} alt={`weather in ${country.capital}`} /> <br />
			wind {weatherData.current.wind_speed} m/s
		</div>
	)
}

export default Country