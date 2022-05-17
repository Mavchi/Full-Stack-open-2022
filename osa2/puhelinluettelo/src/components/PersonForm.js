

const PersonForm = ({ newName, handleChangeName, newNumber, handleChangeNumber, handleNewName }) => {

	return (
		<div>
			<h2>add a new</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleChangeName} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleChangeNumber} />
				</div>
				<div>
					<button onClick={handleNewName} type="submit">add</button>
				</div>
			</form>
		</div>
	)
}

export default PersonForm