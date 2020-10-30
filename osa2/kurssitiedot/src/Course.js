import React from 'react'

const Header = ({name}) => {
    return (
      <h3>{name}</h3>
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
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}

export default Course