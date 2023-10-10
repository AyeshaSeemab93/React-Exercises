
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 5
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },{
        name: 'Redux',
        exercises: 11,
        id:4
      }
    ]
  }

  return(
    <div>
        <Course course={course} />
        
    </div>
  )
  
 
  
}
const Course = ({ course }) => {
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
     <Total parts= {course.parts}/>
   
    </div>
  );
};
const Header = ({ course }) => <h1>{course}</h1>

const Content = ({parts}) => {
console.log("content parts: " ,parts);
return(
  <>
   {
   parts.map(part =>  
            <Part key={part.id} part={part} />
      )
   }  
  </>
)}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total = ({parts}) =>{
  
console.log("Total: ", parts);
return(
<p>total of 
  {
    parts.reduce(function(sum, {exercises}){
      return sum + exercises
    }, 0)
  } exercises
</p>
)
 
} 



export default App