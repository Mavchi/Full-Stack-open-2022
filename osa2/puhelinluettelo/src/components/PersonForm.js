const PersonForm = ({ name, handleChangeOfName, number, handleChangeOfNumber, handleAddingPerson }) => {
    return (
        <form>
          <div>
            name: <input value={name} onChange={handleChangeOfName} />
          </div>
          <div>
            number: <input value={number} onChange={handleChangeOfNumber} />
          </div>
          <div>
            <button type="submit" onClick={handleAddingPerson}>add</button>
          </div>
        </form>
    )
}

export default PersonForm