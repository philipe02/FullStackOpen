import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Anedocte = ({ text, votes }) => {
  console.log('a', text, votes);
  return <div>
    {text}<br />
    has {votes} votes<br />
  </div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(null)

  const selectRandomAnecdote = () => {
    setSelected(Math.round(Math.random() * (anecdotes.length - 1)));
  }
  const voteAnecdote = () => {
    let copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);

    mostVotedAnecdote ?
      copyPoints[selected] > points[mostVotedAnecdote] && setMostVotedAnecdote(selected)
      : setMostVotedAnecdote(selected)
  }

  return (
    <div>
      <Title text="Anedocte of the day" />
      <Anedocte text={anecdotes[selected]} votes={points[selected]} />
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={selectRandomAnecdote}>Random anecdote</button>

      <Title text="Anedocte with most votes" />
      {mostVotedAnecdote !== null ? <Anedocte text={anecdotes[mostVotedAnecdote]} votes={points[mostVotedAnecdote]} /> : "No votes given to anecdotes yet"}
    </div>
  )
}

export default App