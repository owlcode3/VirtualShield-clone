import React from "react";
import { Link } from "react-router-dom";

function HeroButton(props) {
   return (
      <>
         <Link to="/" className={`${props.long ? "btn__long" : "btn__animate"}`}>
            Get Started{" "}
         </Link>
      </>
   );
}

export default HeroButton;
