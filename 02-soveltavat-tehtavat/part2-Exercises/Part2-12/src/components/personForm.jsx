import numberService from '../services/numbers'

function PersonForm({persons, setPersons, newName, setNewName, newNum, setNewNum}){

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
            //add new person to server
            numberService.create(personObj)
            .then(response=>  setPersons(persons.concat(response)))
            //update the state from server response(above) or do it from here like below
          // setPersons(persons.concat(personObj))
          setNewName('')
          setNewNum('')
        }
      }

  return(
    <div>
         <form onSubmit={function(event){ console.log(event); event.preventDefault()}}>
        <div>
        name: <input type="text" value={newName} onChange={ChnageText}/>
        </div>
        <br />
        <div>
          number: <input value={newNum} onChange={ChangeNum}/>
        </div>
        <div>
        <button type="submit" onClick={AddPerson}>add</button>
        </div>

        

      </form> 
    </div>
  )
}


export default PersonForm