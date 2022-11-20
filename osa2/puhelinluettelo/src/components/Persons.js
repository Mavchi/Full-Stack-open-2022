const Person = ({ persons, handleDelete }) => {
	return (
		<div>
			{persons.map(person =>
				<div key={person.id}>
					{person.name} {person.number}
					<button onClick={handleDelete(person.id)}>delete</button>
					<br />
				</div>
			)}
		</div>
	)
}

export default Person