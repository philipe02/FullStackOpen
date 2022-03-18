const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = ({ course = '' }) => {
    return <h1>{course}</h1>
  }

  const Part = ({ info }) => {
    return <p>{info.name} {info.exercises}</p>
  }

  const Content = ({ content = [] }) => {
    return content.map(item => <Part key={item.name} info={item} />)
  }

  const Total = ({ content = [] }) => {
    return <p>{content.map(item => item.exercises).reduce((previousValue, currentValue) => previousValue + currentValue, 0)}</p>
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

export default App
