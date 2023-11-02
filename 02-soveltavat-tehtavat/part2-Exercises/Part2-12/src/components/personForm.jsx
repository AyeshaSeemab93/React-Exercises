// import numberService from '../services/numbers'

// function PersonForm({persons, setPersons, newName, setNewName, newNum, setNewNum, AddPerson}){

//   function ChnageText(event){
//     console.log('event', event)
//     setNewName(event.target.value)
//   }
//   function ChangeNum(event){
//     setNewNum(event.target.value)
//   }
 
//   return(
//     <div>
//          <form onSubmit={
//           function(event){
//             console.log("event is ", event);
//             event.preventDefault(); // to avoid refresh
//             AddPerson();//invoke AddPerson method directly here
//             }}>
//         <div>
//         name: <input type="text" value={newName} onChange={ChnageText}/>
//         </div>
//         <br />
//         <div>
//           number: <input value={newNum} onChange={ChangeNum}/>
//         </div>
//         <div>
//         <button type="submit">add</button>
//         </div>

//       </form> 
//     </div>
//   )
// }


// export default PersonForm

import React from 'react';

function PersonForm({ persons, setPersons, newName, setNewName, newNum, setNewNum, AddPerson }) {
  function handleChangeText(event) {
    setNewName(event.target.value);
  }

  function handleChangeNum(event) {
    setNewNum(event.target.value);
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        //AddPerson();// can Invoke AddPerson directly here
      }}>
        <div>
          name: <input type="text" value={newName} onChange={handleChangeText} />
        </div>
        <br />
        <div>
          number: <input value={newNum} onChange={handleChangeNum} />
        </div>
        <div>
          <button type="submit" onClick={AddPerson} >add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
