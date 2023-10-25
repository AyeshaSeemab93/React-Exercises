import Note from "./components/Note"
function App({notes}) {


  return (
    <>
    <h1>Notes</h1>
    {
      notes.map(function(note){
        return <Note key={note.id} note = {note}/>
      })
    }
      
    </>
  )
}

export default App
