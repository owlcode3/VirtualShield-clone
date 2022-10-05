import React from "react";

function Button(props) {
   return (
      <>
         <li className={`${props.learnMore ? "learn-more" : "navbar__list navbar__list--gs"}`}>{props.learnMore ? "Learn more" : "Get Started"} </li>
      </>
   );
}

export default Button;
