// import React from "react";
//
// function Form(){
//
//   const [one,setOne]=React.useState({
//     country:"",
//     college:""
//   })
//
//   function handleChange(event){
//     const {name,value}= event.target;
//     setOne(prev=>{
//       return {...prev, [name]:value}
//     })
//
//   }
//
//   function handleSubmit(event){
//     event.preventDefault();
//     console.log("hey");
//   }
//
//
//   return(
//     <div className="col d-flex justify-content-center form  " >
//     <div className="wrap"  >
//  <div class="search">
//
//     <input onChange={handleChange} type="text" class="searchTerm" placeholder="Enter College Name" />
//     <button onClick={handleSubmit} type="submit" class="searchButton">
//        Go
//    </button>
//
//  </div>
//
// </div>
//
//    </div>
//   )
// }
//
// export default Form;
import React, { useState } from "react";
import { universities as data } from "../data/db.json";
import Card from "./card";

function Form() {
    const [unis, setUnis] = useState([]);
    const [query, setQuery] = useState("");
    const [count, setCount] = useState(0);
    const [state, setState]= useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = () => {
        const filteredUnis = data.filter((uni) => {
            return uni.name.toLowerCase().includes(query.toLowerCase());
        });
        setUnis(filteredUnis);
        setState(true);
    };

    const showUnis = unis.map((uni) => {
        return (
            <Card
                className="unicard"
                name={uni.name}
                country={uni.country}
                url={uni.url}
            />
        );
    });

    return (
        <div className="col d-flex justify-content-center form">
            <div className="wrap">
                <div className="search">
                    <input
                        onChange={handleChange}
                        type="text"
                        className="searchTerm"
                        placeholder="Enter College Name"
                    />
                    <button
                        type="submit"
                        className="searchButton"
                        onClick={handleSubmit}
                    >
                        Go
                    </button>
                </div>

            </div>

            {state && <div className="no-display"><h3>Currently displaying {unis.length} Universities.</h3></div>}

            <div className="unilist">{showUnis}</div>
        </div>

    );
}

export default Form;
