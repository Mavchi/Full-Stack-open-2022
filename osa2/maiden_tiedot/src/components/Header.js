//import { useState, useEffect } from 'react'


const ShowCountryData = ({ country }) => {
    console.log(country)
    return (
        <div>
            <h2>{country.name.common}</h2>
            capital {country.capital}<br />
            area {country.area}

            <h2>languages</h2>
            {JSON.stringify(country.languages)}

            <img src={country.flags.png} alt="Simple flag of a country we are looking at"/>
        </div>
    )

}


const PrintCountries = ({ countries }) => {
    //console.log(countries)
    // if over 10 countries in suggestions
    if (countries.length === 250 || countries.length === 0)
        return null
    else if (countries.length > 10)
        return 'Too many maches, specify another filter'
    // shows list of max 10 countries by name
    else if (countries.length > 1)
        return (
            <div>
                {countries.map(country => (
                    <div key={country.name.common}>{country.name.common}</div>
                ))}
            </div>
        )
    
    return (
        <ShowCountryData country={countries[0]} />
    )
}

const Header = ({ countries, filter, changeFilter }) => {
    //console.log(countries)
    const showCountries = filter.length === 0
        ? countries
        : countries.filter(country => country.name.common.toLowerCase().includes(filter))


    //onsole.log(showCountries)
    return (
        <div>
            find countries <input value={filter} onChange={changeFilter} /><br />
            <PrintCountries countries={showCountries} />
        </div>
    )
}

export default Header