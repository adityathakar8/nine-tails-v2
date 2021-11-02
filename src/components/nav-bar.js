import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
  return(
    // <nav class="navbar navbar-expand-lg navbar-dark ">
    //   <Link class="navbar-brand" href="#">Nine-Tails</Link>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //
    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav ml-auto">
    //       <li class="nav-item">
    //         <Link class="nav-link" to="/">Home</Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link class="nav-link" href="/about">About</Link>
    //       </li>
    //
    //
    //     </ul>
    //   </div>
    //
    // </nav>
    // <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="navbar bg-dark">
    <Link class="navbar-brand" to="/">Nine-Tails</Link>
    <ul class="nav justify-content-end navbar-right">

<li class="nav-item">
  <Link class="nav-link" to="/">Home</Link>
</li>
<li class="nav-item">
  <Link class="nav-link" to="/about">About</Link>
</li>

</ul>
</div>
// </nav>
  )
}

export default Navbar;
