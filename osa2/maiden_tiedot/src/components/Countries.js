

const Countries = ({ countries, handleChoise }) =>{
    if (countries.length === 0) {
        return (
            'Not found.'
        )
    }

    return (
        <div>
        {countries.length > 10
          ? 'Too many matches, specify another filter'
          : countries.map((country,i) => 
            <div key={i}>
                {country.name} <button onClick={handleChoise(country)}>show</button><br />
            </div>
        )
        }
        </div>
    )
}

export default Countries