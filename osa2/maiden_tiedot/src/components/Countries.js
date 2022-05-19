const Countries = ({ allCountries, filter, handleChoiseOfCountry }) => {
	const showCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

	if (showCountries.length > 10 || filter.length === 0) {
		return (
			<div>Too many matches, specify another filter</div>
		)
	} else {
		return (
			<div>
				{
					showCountries.map(country => <div key={country.name.common}>{country.name.common} <button onClick={() => handleChoiseOfCountry(country)}>show</button></div>)
				}
			</div>
		)
	}
}

export default Countries

/*
let countries = allCountries
if (filter.length === 0) {
	const countries = allCountries.filter(country => country.name.toLocaleLowerCase().includes(filter.toLowerCase()))
}
*/