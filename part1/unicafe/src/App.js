import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>

const StatisticsLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const getTotalReviews = () => good + neutral + bad;
  const getAverage = () => getTotalReviews() ? (good - bad) / getTotalReviews() : 0;
  const getPositivePercentage = () => `${(good / getTotalReviews()) * 100}`;


  return getTotalReviews() ?
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={getTotalReviews()} />
        <StatisticsLine text={"average"} value={getAverage()} />
        <StatisticsLine text={"positive"} value={getPositivePercentage()} />
      </tbody>
    </table> : "No feedback given"

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <Title text="give feedback" />
      <section>
        <Button onClick={incrementGood} label="good" />
        <Button onClick={incrementNeutral} label="neutral" />
        <Button onClick={incrementBad} label="bad" />
      </section>
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App