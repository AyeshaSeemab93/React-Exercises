
function Person({phonebookToShow}){
return(
  <div>
    {
        phonebookToShow.map(person => 
           <p key={person.name}>{person.name} {person.number}</p>
          )
    }
  </div>
)
}

export default Person