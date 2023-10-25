import Header from "./Header"
import Content from "./Content";
import Total from "./Total";


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
export default Course