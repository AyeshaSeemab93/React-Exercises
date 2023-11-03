import React from 'react';

function PersonForm({newName, setNewName, newNum, setNewNum, AddPerson }) {
  function handleChangeText(event) {
    setNewName(event.target.value);
  }

  function handleChangeNum(event) {
    setNewNum(event.target.value);
  }

  return (
    <div>
      <form onSubmit={(event) => { //event object is automaticallypassed 
        event.preventDefault(); // to prevent refresh
        //AddPerson();// can Invoke AddPerson directly here rather than at button
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
