const NumberList = ({ persons, filter }) => {
	//console.log(filter)
	let showNumbers = (filter.length===0)
		? persons
		: persons.filter(contact => contact.name.toLowerCase().includes(filter))
	//console.log(showNumbers)

	return (
		<div>
			<h3>Numbers</h3>
			{showNumbers.map(person =>
				<p key={person.name}>{person.name} {person.number}</p>
			)}
		</div>
	)
}

export default NumberList