import React, { useState } from 'react'

const Statistic = ({ name, num }) => {
    if (name === "positive") {
        return <p>{name} {num} %</p>
    } else return <p>{name} {num}</p>
}

const Statistics = ({ good, neutral, bad, all, avg }) => {
    
    return (
        <>
            <Statistic name="good" num={good} />
            <Statistic name="neutral" num={neutral} />
            <Statistic name="bad" num={bad} />
            <Statistic name="all" num={all} />
            <Statistic name="average" num={avg / all} />
            <Statistic name="positive" num={good / all * 100} />
        </>
        )
}

const Clicked = ({ good, neutral, bad, all, avg }) => {
    if (all > 0) {
        return (
            <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} />
        )
    } else {
        return (
            <p>no feedbacks given </p>
            )
    }
}

const Button = ({ name, handle }) => {
    return <button onClick={handle}>{name}</button>
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)

    const goodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setAvg(avg + 1)
    }

    const neutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const badClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setAvg(avg - 1)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button handle={goodClick} name="good" />
            <Button handle={neutralClick} name="neutral" />
            <Button handle={badClick} name="bad" />

            <h1>statistics</h1>
            <Clicked good={good} neutral={neutral} bad={bad} all={all} avg={avg}/>
            
        </div>
    )
}

export default App