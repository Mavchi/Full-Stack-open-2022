import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return (
    <button onClick={handleClick}>
      {label}
    </button>)
}

const Anecdote = ({ anecdote }) => {
  //console.log(anecdote)
  return (
    <div>
      <h3>Anecdote of the day</h3>
      <div>{anecdote.anecdote}</div>
      <div>has {anecdote.votes} votes</div>
    </div>
  )
}

const MostVoted = ({ anecdotes, most_voted_id }) => {
  //console.log(most_voted_id)
  if (most_voted_id === -1)
    return null
  
  return (
    <div>
      <h3>Anecdote with most votes</h3>
      {anecdotes[most_voted_id].anecdote}<br />
      has {anecdotes[most_voted_id].votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes_raw = [
    {
      anecdote: 'If it hurts, do it more often.',
      votes: 0,
    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      votes: 0,
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      votes: 0,
    },
  ]

  const [anecdotes, setAnecdotes] = useState(anecdotes_raw)
  const [selected, setSelected] = useState(0)
  const [most_voted_id, setMostVotedId] = useState(0)

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    //console.log(anecdotes)
  }

  const handleVote = () => {
    //console.log("vote")
    const updatedAnecdotes = [
      ...anecdotes
    ]
    updatedAnecdotes[selected].votes += 1
    setAnecdotes(updatedAnecdotes)

    // onko suosituin anekdootti
    if (updatedAnecdotes[selected].votes >= updatedAnecdotes[most_voted_id].votes || updatedAnecdotes[most_voted_id].votes === -1) 
      setMostVotedId(selected)
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} />
      <Button 
        handleClick={handleVote}
        label={"vote"}
      />
      <Button
        handleClick={handleNextAnecdote}
        label={"next anecdote"}
      />
      <MostVoted
        anecdotes={anecdotes}
        most_voted_id ={most_voted_id}
      />
    </div>
  )
}

export default App
