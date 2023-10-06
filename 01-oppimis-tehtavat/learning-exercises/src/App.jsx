import { useState } from "react"

const History = (props) => {
      console.log("prop value is history is ", props);
      if (props.allClicks.length === 0) {
        return (
          <div>
            the app is used by pressing the buttons
          </div>
        )
      }
      return (
        <div>
          button press history: {props.allClicks.join(' ')}
        </div>
      )
}

const Button = ({ handleClick, text }) => {
      console.log(handleClick );
      return(
      <button onClick={handleClick}>
        {text}
      </button>
)}

const App = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [value, setValue] = useState(10)
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    return (
      <div>
        {/* {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} /> */}

<button onClick={()=>setValue(0)}>button</button>
      </div>
    )
}
export default App;