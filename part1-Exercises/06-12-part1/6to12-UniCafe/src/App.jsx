import { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)


  const clickGood = ()=> {
  
    const updatedGood = good + 1
    // console.log("good after: ", good);
    // console.log("updated: ", updatedGood);
    setGood(updatedGood); 

    const updatedTotal = totalClicks + 1;
    setTotalClicks(updatedTotal);
  }

  const clickNeutral = () =>{

    console.log("neutral before", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    console.log("neutral after: ", neutral);
    console.log("updated: ", updatedNeutral);
   
    const updatedTotal = totalClicks + 1;
    setTotalClicks(updatedTotal);
  }

  const clickBad = () =>{

    console.log("bad before", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log("bad after: ", bad);
    console.log("updated: ", updatedBad);
    
    const updatedTotal = totalClicks + 1;
    setTotalClicks(updatedTotal);
  } 

  return (
    <div>
     <h1>give feedback</h1>
     <Button handleClick={clickGood}  text = "good"/>
     <Button handleClick={clickNeutral}  text = "neutral"/>
     <Button handleClick={clickBad}  text = "bad"/> 

     <h1>statistics</h1>
     <Statistics good= {good} neutral = {neutral} bad = {bad} totalClicks = {totalClicks}/>
    </div>
  )
}

const Button= ({handleClick, text})=>{
return(
  <button onClick={handleClick}>{text}</button>
)
}

const Statistics = ({good, neutral, bad, totalClicks}) =>{

  if(totalClicks ===0){
    return <div>No feedback given</div>
  }

  const calculateAverage = () =>{
      if(totalClicks === 0)
        return 0;
      const score = good * 1 + neutral * 0 + bad * -1;
      console.log("score", score);
      const average = score / totalClicks;
      return average.toFixed(1);  
  }

  const calculatePercentage = () =>{
      if(totalClicks === 0)
        return "0%";
      const percent = (good / totalClicks) * 100;
      return percent.toFixed(1) + "%";
  }

return(
  <div>
    <StatisticLine text= "good" value={good} />
    <StatisticLine text= "neutral" value={neutral} />
    <StatisticLine text= "bad" value={bad} />
    <StatisticLine text= "all" value={totalClicks} />
    <StatisticLine text= "average" value={calculateAverage()} />
    <StatisticLine text= "positive" value={calculatePercentage()} />
  </div>
)
}


const StatisticLine = ({text, value}) =>{
  return(
    <DislayResult text= {text} value={value} />
  )
}

const DislayResult = (props) =>{
  const cellStyle = {
    width: "50%"
  }
  return(
      <table style={{ width: '50%' }}>
        <tbody>
      <tr>
        <td style={cellStyle}>{props.text}</td>
        <td style={cellStyle}>{props.value}</td>  
      </tr>
      </tbody>
      </table> 
  )
}


export default App