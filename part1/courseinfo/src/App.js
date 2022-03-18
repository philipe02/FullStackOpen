const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = ({ course = '' }) => {
    return <h1>{course}</h1>
  }

  const Part = ({ info }) => {
    return <p>{info.name} {info.exercises}</p>
  }

  const Content = ({ content = [] }) => {
    return content.map(item => <Part info={item} />)
  }

  const Total = ({ content = [] }) => {
    return <p>{content.map(item => item.exercises).reduce((previousValue, currentValue) => previousValue + currentValue, 0)}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Total content={parts} />
    </div>
  )
}

export default App
