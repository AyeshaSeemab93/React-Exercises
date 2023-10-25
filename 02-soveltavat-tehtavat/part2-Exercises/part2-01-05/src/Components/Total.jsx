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

  export default Total