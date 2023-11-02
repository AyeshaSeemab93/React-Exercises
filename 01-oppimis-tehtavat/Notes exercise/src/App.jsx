import { useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import axios from 'axios'

function App(){
   const [notes, setNote] = useState([])
  // const [notes, setNote] = useState(props.notes)
  const[showAll, setShowAll] = useState(true)
  const[text, setText] = useState('Add new Note')

  //getting data from server (http get USING AXIOUS)
      useEffect(()=>{
        console.log("use effect"),
        // axios.get('http://localhost:3000/notes')
        noteService.getAll()
        .then((initialNotes)=>{
          setNote(initialNotes)
        })}, []);
     // console.log('rendered', notes.length, 'notes')

  //if statement
    const showNotes = showAll
    ? notes
    : notes.filter(note => note.important === true)


function AddNote(){
    console.log('Adding Note')
    const noteObj = {
        // id: notes.length + 1, let the server generate id itself
        content: text,
        important: Math.random() > 0.5
    }
    //altering the data(notes) on server (HTTP POST)
    // axios.post('http://localhost:3000/notes/', noteObj)
    noteService.create(noteObj)
    .then((returnedNote)=>{
    console.log("promise successfull")
    // const newNote = responce.data;
    setNote(notes.concat(returnedNote))
    setText('')

    })
}

function toggleImportanceOf(id){
    const note = notes.find(n => n.id === id)
    //creating new object of the note bec can not change directly in the state
    const changedNote = {...note, important: !note.important}
    
    //replace the note in the notes in server
    // axios.put(url, changedNote)
    noteService
    .update(id, changedNote)
    .then(returnedNote=>{
      //now set the note in state also from server data
        setNote(notes.map(note =>
          note.id !== id ? note : returnedNote
        ))
    })
    .catch(error =>{
      alert(`the note '${note.content}' was already deleted from server`)
      //Set the state again(delete handcoded note) filter method.it give new array with all ids execept this id
    setNote(notes.filter(n =>n.id !== id))
    })
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
        {showNotes.map(note => 
        <Note 
        key={note.id}
        note= {note}
        toggleImportance={() => toggleImportanceOf(note.id)}
        />)}
      </ul>
      <form onSubmit={(event)=> event.preventDefault()}>
        <input value={text} onChange={ChangeInput} />
        <button onClick={AddNote}>Save</button>
      </form>
    </div>
  )

}
export default App