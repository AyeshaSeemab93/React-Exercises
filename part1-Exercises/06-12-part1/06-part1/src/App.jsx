import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = ()=> {
    console.log("good before: ", good);
    const updatedGood = good + 1
    console.log("good after: ", good);
    console.log("updated: ", updatedGood);
    setGood(updatedGood); 
  
  }
  const clickNeutral = () =>{
    console.log("neutral before", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    console.log("neutral after: ", neutral);
    console.log("updated: ", updatedNeutral);
  }
  const clickBad = () =>{
    console.log("bad before", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log("bad after: ", bad);
    console.log("updated: ", updatedBad);
  }

  return (
    <div>
     <h1>give feedback</h1>
     <Button handleClick={clickGood}  text = "good"/>
     <Button handleClick={clickNeutral}  text = "neutral"/>
     <Button handleClick={clickBad}  text = "bad"/> 

     <h1>statistics</h1>
     <DislayResult text= "good" value={good} />
     <DislayResult text= "neutral" value={neutral} />
     <DislayResult text= "bad" value={bad} />
    </div>
  )
}

const Button= ({handleClick, text})=>{
return(
  <button onClick={handleClick}>{text}</button>
)
}
const DislayResult = (props) =>{
  return(
    <div>{props.text} {props.value}</div>
  )
}

export default App