const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const content = [part1, part2, part3]

  const Header = ({ course = '' }) => {
    return <h1>{course}</h1>
  }

  const Part = ({ info }) => {
    return <p>{info.name} {info.exercises}</p>
  }

  const Content = ({ content = [] }) => {
    return content.map(item => <Part info={item} />)
  }

  const Total = ({ exercises = [] }) => {
    return <p>{exercises.reduce((previousValue, currentValue) => previousValue + currentValue)}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total exercises={content.map(item => item.exercises)} />
    </div>
  )
}

export default App
