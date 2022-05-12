import react from 'react'
import { useState } from 'react'

const ShowFeedback = ({ feedback }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>good {feedback.good}</p>
      <p>neutral {feedback.neutral}</p>
      <p>bad {feedback.bad}</p>
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
