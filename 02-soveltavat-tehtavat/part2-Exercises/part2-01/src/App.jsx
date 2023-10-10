  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return (
      <div>
         <Course course = {courses} />
      </div>
    )
  }


const Course = ({ course }) => {
  console.log("course: ", course);
  return (
    <div>
      {
        course.map(function(course){
          console.log(course);
          return(
            <div>
            <Header course = {course} />
            <Content parts={course.parts}/>
             <Total parts= {course.parts}/> 
             </div>
          )
        })

      }
    
    </div>
  );
};
const Header = ({ course }) => <h1>{course.name}</h1>   

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
<p>total of {
    parts.reduce(function(sum, {exercises}){
      return sum + exercises
    }, 0)
  } exercises
</p>
)
  
} 



export default App