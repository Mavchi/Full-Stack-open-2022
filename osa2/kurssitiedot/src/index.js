// v2.3
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({ part }) => {
  return (
  <p>
    {part.name} {part.exercises}
  </p>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map( part =>
      <Part key={part.id} part={part} />
    )
  )
}

const Total = ({ parts }) => {
  const values = parts.map( part => part.exercises )
  const sum = (accumulator, currentValue) => accumulator + currentValue

  return (
    <p><strong>total of {values.reduce(sum)} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))