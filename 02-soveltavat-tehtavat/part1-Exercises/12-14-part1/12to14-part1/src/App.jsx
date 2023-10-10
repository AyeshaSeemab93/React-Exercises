import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // create a zero-filled array
  const[voteArray, setVoteArray] = useState(new Uint16Array(anecdotes.length))

  const selectRandom = ()=>{
      //generating a random number (Math.floor()- to get integer ,not decimal)
       let x = Math.floor(Math.random() * anecdotes.length);
      console.log("x", x);
      //making selected == x
      setSelected(x);
      console.log("selected", selected);
      
  }

  const voteIt = () =>{
    
    console.log("voteArray: ",voteArray);
    console.log("current location in anecdotes: ", selected);
    // Create a copy of the voteArray( don't directly modify the state)
    const updatedVoteArray = [...voteArray];
    updatedVoteArray[selected] += 1;
    setVoteArray(updatedVoteArray);
    //call the method to check and then post the most voted acedote everytime on voting.
    MostVotes(updatedVoteArray, anecdotes);
  }
  return (
    <div>
    <Header text = " Anecdote of the day"/>
    <Display anecdotes = {anecdotes} selected = {selected}/> 
    <div>has {voteArray[selected]} votes</div>
    <Button handleclick={voteIt} text= "Vote"/>
    <Button handleclick={selectRandom} text= "next anecdote" />
    <Header text = " Anecdote with most votes"/>
    <MostVotes voteArray={voteArray} anecdotes={anecdotes} />

    </div>
  )
}
const Display = ({anecdotes, selected}) =>{
  //console.log(anecdotes, selected);
return(
  <div>
    <div>{anecdotes[selected]}</div>
    </div>
)
}
const Button = ({handleclick, text}) => <button onClick={handleclick}>{text}</button>
  

const Header = ({text}) =>  <h1>{text}</h1>


const MostVotes = ({ voteArray, anecdotes }) => {
  // Check if voteArray or anecdotes is undefined
  if (!voteArray || !anecdotes) {
    return null; // or return a loading message or some fallback content
  }

  let maxVotes = 0;
  let maxIndex = 0;

  for (let i = 0; i < voteArray.length; i++) {
    if (voteArray[i] > maxVotes) {
      maxVotes = voteArray[i];
      maxIndex = i;
    }
  }
  return (
    <div>
      <Display anecdotes={anecdotes} selected={maxIndex} />
      <div>has {maxVotes} votes</div>
    </div>
  );
};

export default App