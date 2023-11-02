import { useState , useEffect} from 'react'
import Person from './components/person'
import Filter from './components/Filter'
import PersonForm from './components/personForm'
import numberService from './services/numbers'


function App(){
  const[persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const[newNum, setNewNum] = useState('')

  const[searchedName, setSearchedName] = useState('')
  const[showAll, setShowAll]= useState(true)

    useEffect(()=>{
      console.log("using effect")
    numberService
      .getAll()
      .then(response=>{
        console.log('promise fulfilled')
    const persons = response;
    setPersons(persons);
      })
    }, []);

console.log('render', persons.length, 'persons')
  
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
   function AddPerson(){
    // const nameExists = persons.some(person=>person.name === newName);
    //some method give true or false where as filter give list with the selected condition
    console.log('added person')

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
            //add new person to server
            numberService.create(personObj)
            .then(response=>  setPersons(persons.concat(response)))
            //update the state from server response(above) or do it from here like below
           setPersons(persons.concat(personObj))
          setNewName('')
          setNewNum('')
          console.log('added person')
        }
          }

  return(
    <div>
      <h2>Phonebook</h2>
    
      <Filter 
        key={searchedName.id}
        searchedName={searchedName} 
        setSearchedName={setSearchedName}  
        showAll={showAll} 
        setShowAll={setShowAll}
      />

      <h3>add a new</h3>
      
      <PersonForm 
          key={persons.id}
          persons={persons} 
          setPersons={setPersons} 
          newName={newName} 
          setNewName={setNewName} 
          newNum= {newNum} 
          setNewNum={setNewNum}
          showAll={showAll}
          AddPerson={()=>{AddPerson()}}
      />

      <h3>Numbers</h3>

      <Person 
      key={persons.id} 
      phonebookToShow={phonebookToShow} 
      />
    </div>
  )

}

export default App


















