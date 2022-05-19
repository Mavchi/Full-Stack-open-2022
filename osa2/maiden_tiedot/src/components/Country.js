const Country = ({ country }) => {
    console.log('country selected: ', country)
    return (
        <div>
            <h1>{country.name.common}</h1>
            capital {country.capital}<br />
            area {country.area}
            <br />
            <h4>Languages:</h4>
            {JSON.stringify(country.languages) }
            <br />
            <br />
            <img src={country.flags.png} />
        </div>
    )
}

export default Country

// {JSON.stringify(country.languages) }