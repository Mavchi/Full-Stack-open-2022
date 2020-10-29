import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => (
  <div>
    good {good} <br />
    neutral {neutral} <br />
    bad {bad} <br />
    all {good+neutral+bad} <br />
    average {((good*1)+(bad*-1))/(good+neutral+bad)} <br />
    positive {good/((good+neutral+bad))*100} %
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render( <App />,
  document.getElementById('root')
)