import { useState , useEffect} from 'react'
import Person from './components/person'
import Filter from './components/Filter'
import PersonForm from './components/personForm'
import numberService from './services/numbers'
import Notification from './components/Notification'
import './index.css'


function App(){
  const[persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const[newNum, setNewNum] = useState('')

  const[searchedName, setSearchedName] = useState('')
  const[showAll, setShowAll]= useState(true)
  const [message, setMessage] = useState('message')

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
    //some method give true or false where as find give person with the condition
    const nameExists = persons.find(person=>person.name.toLowerCase() === newName.toLowerCase());
    console.log('nameExist: ', nameExists)
      if(nameExists)
        {
        if(window.confirm(`${newName} is already added to the phonebook. Replace the old number with the new one?`))
         {
            const updatedPerson = {...nameExists, number : newNum}
            numberService
              .update(nameExists.id, updatedPerson)
              .then(data =>{
                //updating state as well
                const updatedPersons = persons.map(person => person.id ===nameExists.id ? updatedPerson : person)
                setPersons(updatedPersons); 
                setMessage('Phone Number Changed Successfully!')
                setTimeout(()=>{setMessage(null)}, 3000) //message dissapper fro 3 sec
              }) 
              .catch(error=>{
                setMessage(`Information of ${updatedPerson.name} has already been removed from server`)
                setTimeout(() => {
                  setMessage(null)
                }, 3000);

              }) 
          }
        }  
     else{
        const personObj = {
            name: newName.charAt(0).toUpperCase() + newName.slice(1),
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
        console.log('addPerson method successfully end')
        setMessage(`Added ${personObj.name}`);
        setTimeout(() => {
          setMessage(null)}
          , 3000);
        }
          }

    const deleteEntry = (id) =>{
     console.log('id received in delete function is : ', id)
    const personToDelete = persons.find(person=> person.id === id )
     if(window.confirm('Are you sure You want to delete this?'))
      {
        numberService.remove(id, personToDelete)
        .then(data => setPersons(persons.filter(person => person.id !== id)))
        setMessage(`${personToDelete.name} deleted successfully!`)
        setTimeout(()=>{setMessage(null)}, 3000)
      } 
    }

  return(
    <div className='main'>
      <h2>Phonebook</h2>
      <Notification message = {message} />
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
      deleteEntry={deleteEntry} //just reference here
      />
    </div>
  )

}

export default App


















