import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Stats = ({ good, neutral, bad }) => (
  <div>
    good {good} {' '}
    neutral {neutral} {' '}
    bad {bad} 
  </div>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => addGood()} text='good' />
      <Button onClick={() => addNeutral()} text='neutral' />
      <Button onClick={() => addBad()} text='bad' />
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render( <App />,
  document.getElementById('root')
)