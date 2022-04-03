import { useState } from 'react'
import Filters from './components/Filters';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const addPerson = e => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber }
    if (persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    newPerson.id = persons[persons.length - 1].id + 1
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filters filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App