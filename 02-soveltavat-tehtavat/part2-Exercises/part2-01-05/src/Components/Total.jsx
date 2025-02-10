const Total = ({parts}) =>{
  
  console.log("Total: ", parts);
  return(
  <h3>total of {
      parts.reduce(function(sum, {exercises}){
        return sum + exercises
      }, 0)
    } exercises
  </h3>
  ) 
  } 

  export default Total