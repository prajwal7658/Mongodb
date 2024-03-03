import React from "react";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={{ pathname: "/blog" }}>My Blogs</Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About Me</Link>
        </li>
      </ul>
      <hr></hr>
      <div>About Trip app</div>
      <div style={{backgroundColor:"lightgreen"}} img="" >
      <p style={{color: "black"}}> This trip made me so happy because I went to states I have not been in before.
         In the trip, I met new people and went to new places and saw new things. 
         I never expected the trip to be so nice, but it ended up being my best trip ever in my life so far.</p>
      </div>

      {/* please enter your detail here  */}
    </>
  );
}
