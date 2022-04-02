import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = e => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const addPerson = e => {
    e.preventDefault();
    if (JSON.stringify(persons).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons && persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App