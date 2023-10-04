//REACT COMPONENTS:

const App = () =>{
  const friends = [
    {name: "Ayesha", age: 20},
    {name: "Saira", age: 12},
    {name: "Saher", age: 16},
  ]
const names = ["Ayesha", "Saira", "Saher"];
return(
  <div>
<p>{friends[0].name} + {friends[0].age}</p>
<p>{friends[1].name} + {friends[1].age}</p>
<p>{friends[2].name} + {friends[2].age}</p>
<p>{names}</p>
</div>
)
}







export default App