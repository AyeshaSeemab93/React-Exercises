import Header from "./Header"
import Content from "./Content";
import Total from "./Total";


const Course = ({ course }) => {
  console.log("course: ", course);
  return (
    <div>
      <h1>Web development curriculum</h1>
      {
        course.map(function(courseItem){
          console.log(course);
          return(
            <div key={courseItem.id}>
            <Header name = {courseItem.name} />
            <Content parts={courseItem.parts}/>
             <Total parts= {courseItem.parts}/> 
             </div>
          )
        })

      }
    
    </div>
  );
};
export default Course