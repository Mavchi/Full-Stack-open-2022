
const PersonForm = ({ newName, newNumber, handleChangeOfName, handleChangeOfNumber, handleAddNew }) => {

	return (
		<form>
			<div>
				name:
				<input
					value={newName}
					onChange={handleChangeOfName}
				/><br />
				number:
				<input
					value={newNumber}
					onChange={handleChangeOfNumber}
				/>
			</div>
			<div>
				<button type="submit" onClick={handleAddNew}>
					add
				</button>
			</div>
		</form>
	)
}

export default PersonForm;