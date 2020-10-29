import React from 'react'
import ReactDOM from 'react-dom'

const Sum = (numbers) => {
  return numbers.reduce((a, b) => a+b, 0)
}

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = ({parts, exercises}) => (
  <div>
    <Part part={parts[0]} exercises={exercises[0]} />
    <Part part={parts[1]} exercises={exercises[1]} />
    <Part part={parts[2]} exercises={exercises[2]} />
  </div>
)

const Total = ({ exercises }) => (
  <p>Number of exercises {Sum(exercises)}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))