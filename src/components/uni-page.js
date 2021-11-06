import React from "react";
import { useLocation } from 'react-router-dom';

function UniPage(){
  const location = useLocation()
  console.log(location.state);
  const {college,url,country}= location.state;

  return (
    <div className="form">
    <div className="uni-page-contents">
    <h1 className="uni-page-elements">{college}</h1>
    <h3 className="uni-page-elements" >{country}</h3>
     <a className="uni-page-elements" href={url}>University Website</a>
    </div>
     </div>
  )
}

export default UniPage;
