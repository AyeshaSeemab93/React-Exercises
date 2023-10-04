function ListGroup() {

let fruits = [
  'apple',
  'banana',
  'orange',
  'raspberry'
];
let listIndex = 0;
return(
<>


<h1>Fruits Names</h1>
{/* {fruits.length === 0 ? <p>Fuits not found</p>: null }  =====    */}
{fruits.length === 0 && <p>Fuits not found</p> }
<ul className="list-group">
  {fruits.map((fruit, index)=><li 
  className={(listIndex=== index ? "list-group-item active" : "list-group-item")}
  key={fruit} onClick={()=> listIndex = index}>{fruit}</li>)}
</ul>


</>
)
}
export default ListGroup;
