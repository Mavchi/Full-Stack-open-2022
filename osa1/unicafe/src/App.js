import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const average = () => (good + neutral + bad) !== 0
    ? (good + bad * -1) / (good + neutral + bad)
    : 0

  const positive = () => (good + neutral + bad) !== 0
    ? good / (good + neutral + bad)
    : 0

  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="average" value={average()} />
          <StatisticsLine text="positive" value={positive()} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} label="good" />
      <Button handleClick={handleNeutral} label="neutral" />
      <Button handleClick={handleBad} label="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App