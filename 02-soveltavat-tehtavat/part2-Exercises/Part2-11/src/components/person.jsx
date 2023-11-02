
function Person({phonebookToShow}){
return(
  <div>
    {
        phonebookToShow.map(person => 
                            <p>{person.name} {person.number}</p>
                           )
    }
  </div>
)
}

export default Person