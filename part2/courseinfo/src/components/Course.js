const Header = ({ course = '' }) => {
  return <h2>{course}</h2>
}

const Total = ({ content = [] }) => {
  return <strong>total of {content.map(item => item.exercises).reduce((previousValue, currentValue) => previousValue + currentValue, 0)} exercises</strong>
}

const Part = ({ info }) => {
  return <p>{info.name} {info.exercises}</p>
}

const Content = ({ content = [] }) => {
  return content.map(item => <Part key={item.name} info={item} />)
}

const Course = ({ course }) =>
  <div>
    <Header course={course.name} />
    <Content content={course.parts} />
    <Total content={course.parts} />
  </div>

export default Course