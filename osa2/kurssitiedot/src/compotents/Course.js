const Header = ({ label }) => <h3>{label}</h3>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

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
const Total = ({ parts }) => {

    return (
      <p><b>
        total of {
          parts.reduce((accum, obj) => accum + obj.exercises, 0)
        }
      </b></p>
    )
}

const Course = ({ course }) => {
    //console.log(course)
    return (
      <div>
        <Header label={course.name} />
        <Content parts={course.parts} />
      </div>
    )
}

export default Course