import React from "react";
import { Link } from "react-router-dom";
import { SiAndroid, SiApple } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { FaLinux } from "react-icons/fa";

function AppListSection() {
   return (
      <div className="apps__section">
         <div className="container">
            <ul className="apps">
               <li className="apps__list">
                  <Link to="/" className="apps__link apps__link--color">
                     <span>
                        <SiApple className="apps__icon" size={30} color={"black"} />
                     </span>{" "}
                     <span className="apps__name">iOS</span>
                  </Link>
               </li>
               <li className="apps__list active-background">
                  <Link to="/" className="apps__link apps__link--android">
                     <span>
                        <SiAndroid className="apps__icon" size={25} color={"#698aff"} />
                     </span>
                     <span className="apps__name">Android</span>
                  </Link>
               </li>
               <li className="apps__list">
                  <Link to="/" className="apps__link apps__link--color">
                     <span>
                        <AiFillWindows className="apps__icon" size={30} color={"black"} />
                     </span>{" "}
                     <span className="apps__name">Windows</span>
                  </Link>
               </li>
               <li className="apps__list">
                  <Link to="/" className="apps__link apps__link--color">
                     <span>
                        <SiApple className="apps__icon" size={30} color={"black"} />
                     </span>{" "}
                     <span className="apps__name">MacOs</span>
                  </Link>
               </li>
               <li className="apps__list">
                  <Link to="/" className="apps__link apps__link--color">
                     <span>
                        <FaLinux className="apps__icon" size={30} color={"black"} />
                     </span>{" "}
                     <span className="apps__name">Linux</span>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default AppListSection;
