import React from "react";

function Card(props) {
   return (
       <div class="card border-dark  bg-transparent bg-secondary note">
           <div class="card-body">
               <h5 class="card-title">{props.name}</h5>
               <h6 class="card-subtitle mb-2  ">{props.country}</h6>
               <a href={props.url} className="card-link">
                   {props.url}
               </a>
           </div>
       </div>
   );
}

export default Card;
