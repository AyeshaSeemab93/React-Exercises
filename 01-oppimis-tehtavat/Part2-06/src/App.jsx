import { useState } from 'react'
import Note from './components/Note'
function App(props){
  const [notes, setNote] = useState(props.notes)
  const[showAll, setShowAll] = useState(true)
  const[text, setText] = useState('default text')
  //if statement
    const showNotes = showAll
    ? notes
    : notes.filter(note => note.important === true)

function AddNote(){
console.log('Adding Note')
const noteObj = {
    id: notes.length + 1,
    content: text,
    important: Math.random() > 0.5
}
setNote(notes.concat(noteObj))
setText('')

}
function ChangeInput(event){
  setText(event.target.value)
}
  return(
    <div>
      <h1>Notes</h1>
      <button onClick={()=>setShowAll(!showAll)}> 
        Show {showAll ? ' important' : ' All'}
      </button>
      <ul>
        {showNotes.map(note => <Note note= {note}/>)}
      </ul>
      <form onSubmit={(event)=> event.preventDefault()}>
        <input value={text} onChange={ChangeInput} />
        <button onClick={AddNote}>Save</button>
      </form>
    </div>
  )

}
export default App


















