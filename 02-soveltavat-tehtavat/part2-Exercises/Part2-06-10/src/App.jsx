import { useState } from "react"
import Name from './components/name'

function App(){
  const[persons, setPersons] = useState([{name: 'Ayesha'}])
  const [newName, setNewName] = useState('')

  function ChnageText(event){
  console.log('event', event)
  setNewName(event.target.value)
  }

  function AddPerson(){
    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj))
  }
 
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={function(event){ console.log(event); event.preventDefault()}}>
        <div>
        name: <input type="text" value={newName} onChange={ChnageText}/>
        </div>
        
        <div>
        <button type="submit" onClick={AddPerson}>add</button>
        </div>
        <h2>Numbers</h2>
        {persons.map(person => <Name key={person.name} name={person.name}/>)}

      </form>
    </div>
  )

}
export default App


















