const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Part1 = {
    part: part1,
    exercises: exercises1,
  }
  const Part2 = {
    part: part2,
    exercises: exercises2,
  }
  const Part3 = {
    part: part3,
    exercises: exercises3,
  }

  return (
    <div>
      <Header name={course} />
      <Content 
      partProps1 = {Part1}
      partProps2 = {Part2}
      partProps3 = {Part3} />
      <Total totalExercise = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part = {props.partProps1.part}  exercises = {props.partProps1.exercises} />
      <Part part = {props.partProps2.part}  exercises = {props.partProps2.exercises} />
      <Part part = {props.partProps3.part}  exercises = {props.partProps3.exercises} />
    </>
  )
}

const Part = (partProps) => {
  return(
    <>
      <p>
        {partProps.part} {partProps.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.totalExercise}</p>
    </>
  )
}

export default App