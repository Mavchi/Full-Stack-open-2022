
const Header = ({ course }) => {
  return (
    <h1>
      {course}
    </h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const total_exercises = parts.reduce((sum, part) => {
      return sum+part.exercises
  }, 0)

  return (
    <p style={{fontWeight: "bold"}}>
      total of {total_exercises} exercises 
    </p>
  )
}

const Course = (props) => {
  const { course } = props

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course