import react from 'react'
import { useState } from 'react'

const Average = ({ feedback }) => {
  let sum = feedback.good*1 + feedback.bad*-1
  let total = feedback.good+feedback.neutral+feedback.bad

  console.log(sum)
  console.log(total)

  return (
    <div>
      average {isNaN(sum/total) ? 0 : sum/total} 
    </div>
  )
}

const Positive = ({ feedback }) => {
  let positive = feedback.good / (feedback.good+feedback.neutral+feedback.bad)

  return (
    <div>
      positive {isNaN(positive) ? 0 : positive}
    </div>
  )
}

const ShowFeedback = ({ feedback }) => {

  return (
    <div>
      <h3>Statistics</h3>
      <div>good {feedback.good}</div>
      <div>neutral {feedback.neutral}</div>
      <div>bad {feedback.bad}</div>
      <div>all {feedback.good+feedback.neutral+feedback.bad}</div>
      <Average feedback={feedback} />
      <Positive feedback={feedback} />
    </div>
  )
}

const Button = ({ handleClick, label }) => {
  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGoodClick= () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good+1
    }
    setFeedback(newFeedback)
  }
  const handleNeutralClick= () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral+1
    }
    setFeedback(newFeedback)
  }
  const handleBadClick= () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad+1
    }
    setFeedback(newFeedback)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} label="good" />
      <Button handleClick={handleNeutralClick} label="neutral" />
      <Button handleClick={handleBadClick} label="bad" />

      <ShowFeedback feedback={feedback} />
    </div>
  )
}

export default App
