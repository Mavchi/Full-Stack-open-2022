import react from 'react'

const Header = (props) => {
  return (
    <h1>{
      props.course}
    </h1>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  //console.log(props.parts[0])
  return (
    <div>
      {parts.map(part => 
        <Part key={part.name} part={part} />
      )}

      <Total parts={parts} />
    </div>
  )
}

const Total = ({parts }) => {
  let getSum = parts.reduce((accum,obj) => accum + obj.exercises)
  return (
    <p>
      total of {
        parts.reduce((accum,obj) => accum + obj.exercises, 0)
      }
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    }, 
    {
      name: 'Using props to pass data',
      exercises: 7
    }, 
    {
      name: 'State of a component',
      exercises: 14
    }, 
    {
      name: 'Redux',
      exercises: 11,
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    </div>
  )
}

export default App
