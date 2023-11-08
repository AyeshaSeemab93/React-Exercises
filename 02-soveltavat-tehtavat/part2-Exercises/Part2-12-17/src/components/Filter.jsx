function Filter({searchedName,setSearchedName,showAll ,setShowAll}){
  function ChangeSearch(event){
    setSearchedName(event.target.value)
  }
  
  return(
    <div>
      Filter Shown With: 
      <input 
        value={searchedName} 
        onChange={ChangeSearch} 
        onClick={() => setShowAll(!showAll)}
      />
    </div>
  )

}
export default Filter