import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  const getTotalReviews = () => good + neutral + bad;
  const getAverage = () => (good - bad) / getTotalReviews();
  const getPositivePercentage = () => `${(good / getTotalReviews()) * 100}`

  return (
    <div>
      <Title text="give feedback" />
      <section>
        <Button onClick={incrementGood} label="good" />
        <Button onClick={incrementNeutral} label="neutral" />
        <Button onClick={incrementBad} label="bad" />
      </section>
      <Title text="statistics" />
      <section>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {getTotalReviews()}</p>
        <p>average {getAverage()}</p>
        <p>positive {getPositivePercentage()}</p>
      </section>
    </div>
  )
}

export default App