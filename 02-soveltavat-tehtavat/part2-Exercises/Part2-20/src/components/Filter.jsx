function Filter({searchedName,setSearchedName,showAll ,setShowAll}){
  function ChangeSearch(event){
    setSearchedName(event.target.value)
  }
  
  return(
    <div>
      filer shown with
      <input 
        value={searchedName} 
        onChange={ChangeSearch} 
        onClick={() => setShowAll(!showAll)}
      />
    </div>
  )


}
export default Filter