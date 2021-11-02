import React from "react";
import {Link} from "react-router-dom";

function Home(){
  return(
    <div>




   <div className="home">
    <div className="info">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
    <button type="button" class="btn btn-info"><Link className="button-class" to="/form">Get Started.</Link></button>

    </div>


    </div>
    </div>


  )
}

export default Home;
