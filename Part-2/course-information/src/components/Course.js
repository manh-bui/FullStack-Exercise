const Course = ({ course }) => {
    return(
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </>
    )
}

const Header = ({ course }) => {
    return(
        <h1>{course}</h1>
    )
}

const Total = ({ sum }) => {
    return(
        <p><b>total of {sum} exercises</b></p>
    )
}

const Part = ({ part }) => {
    return(  
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({ parts }) => {
    return(
        <>
        {parts.map(part => <Part key={part.name} part={part} />)}
        </>
    )
}

export default Course