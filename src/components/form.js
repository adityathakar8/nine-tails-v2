import React from "react";

function Form(){

  const [one,setOne]=React.useState({
    country:"",
    college:""
  })

  function handleChange(event){
    const {name,value}= event.target;
    setOne(prev=>{
      return {...prev, [name]:value}
    })

  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("hey");
  }


  return(
    <div class="col d-flex justify-content-center form">
    <div class="wrap">
 <div class="search">

    <input onChange={handleChange} type="text" class="searchTerm" placeholder="Enter College Name" />
    <button onClick={handleSubmit} type="submit" class="searchButton">
       Go
   </button>

 </div>
</div>
   </div>
  )
}

export default Form;
