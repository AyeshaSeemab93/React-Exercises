import { useState } from "react"
import Person from './components/person'

function App(){
  const[persons, setPersons] = useState([
                                          {name: 'Arto Hellas', 
                                          number:'040-123456', 
                                          id: 1}
                                        ])
  const [newName, setNewName] = useState('abc')
  const[newNum, setNewNum] = useState('123')

  function ChnageText(event){
  console.log('event', event)
  setNewName(event.target.value)
  }
  function ChangeNum(event){
setNewNum(event.target.value)
  }

  function AddPerson(){
    // const nameExists = persons.some(person=>person.name === newName);
    //some method give true or false where as filter give list with the selected condition
    const nameExists = persons.filter(person=>person.name === newName);
      if(nameExists.length > 0 ){
          alert(`${newName} is already added to phonebook`);  
        }
        else{
          const personObj = {
            name: newName,
            number: newNum,
            id: persons.length + 1
          }
          setPersons(persons.concat(personObj))
          setNewName('')
          setNewNum('')
        }
  
  }
 
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={function(event){ console.log(event); event.preventDefault()}}>
        <div>
        name: <input type="text" value={newName} onChange={ChnageText}/>
        </div>
        <div>
          number: <input value={newNum} onChange={ChangeNum}/>
        </div>
        <div>
        <button type="submit" onClick={AddPerson}>add</button>
        </div>

        <h2>Numbers</h2>
        {persons.map(person => <Person key={person.id} person={person} />)}

      </form>
    </div>
  )

}
export default App


















