const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [{ part: part1, exercise: exercises1 }, { part: part2, exercise: exercises2 }, { part: part3, exercise: exercises3 }]

  const exercises = [exercises1, exercises2, exercises3]

  const Header = ({ course = '' }) => {
    return <h1>{course}</h1>
  }

  const Part = ({ info }) => {
    return <p>{info.part} {info.exercise}</p>
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
      <Total exercises={exercises} />
    </div>
  )
}

export default App
