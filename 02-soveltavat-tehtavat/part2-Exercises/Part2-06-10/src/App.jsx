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
  const[searchedName, setSearchedName] = useState('search')
  const[showAll, setShowAll]= useState(true)

  //IF showAll is true then show full persons list else filter to find the searched name
  var phonebookToShow= showAll
  ? persons
  :(persons.filter(person => 
    {
      const lowercaseName = person.name.toLowerCase();
      const lowercaseQuery = searchedName.toLowerCase();
      return lowercaseName.includes(lowercaseQuery); //check if name matches with the searched name(lower+ upper cases both checked here)
    }
    ))

  function ChnageText(event){
    console.log('event', event)
    setNewName(event.target.value)
  }
  function ChangeNum(event){
    setNewNum(event.target.value)
  }
  function ChangeSearch(event){
    setSearchedName(event.target.value)
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
      filer shown with<input value={searchedName} onChange={ChangeSearch} onClick={() => setShowAll(!showAll)}/>
      

      <h2>add a new</h2>
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
       
        {phonebookToShow.map(person => <Person key={person.id} person={person} />)}

      </form>
    </div>
  )

}
export default App


















