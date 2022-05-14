
const Header = ({ handleChange, input_value }) => {	
	return (
		<div>
			<h2>Phonebook</h2>
			filter shown with <input value={input_value} onChange={handleChange} />
			<br /><br />
		</div>
	)
}

export default Header