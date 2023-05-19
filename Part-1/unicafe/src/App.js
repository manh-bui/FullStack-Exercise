import { useState } from 'react'

//Tier 2 component
const StatisticLine = ({text, value}) => {
  return(
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

//Tier 1 component
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad  
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all === 0) {
    return(
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
        <tr><StatisticLine text='good' value={good} /></tr>
        <tr><StatisticLine text='neutral' value={neutral} /></tr>
        <tr><StatisticLine text='bad' value={bad} /></tr>
        <tr><StatisticLine text='all' value={all} /></tr>
        <tr><StatisticLine text='average' value={average} /></tr>
        <tr><StatisticLine text='positive' value={positive + ' %'} /></tr>
        </tbody>  
      </table>
    </div>
  )
}

//Tier 1 component
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

//Main component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App