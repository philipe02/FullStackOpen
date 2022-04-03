const Persons = ({ persons, filter }) => {
  const showPersons = () => {
    return filter ?
      persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => <div key={person.id}>{person.name} {person.number}</div>)
      : persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)

  }

  return persons && showPersons()
}

export default Persons