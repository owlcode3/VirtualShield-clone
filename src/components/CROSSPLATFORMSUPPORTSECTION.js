import React from "react";
import { Link } from "react-router-dom";
import { SiAndroid, SiApple } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillWindows } from "react-icons/ai";
import { FaLinux } from "react-icons/fa";

function CROSSPLATFORMSUPPORT() {
   return (
      <section className="cps__section">
         <div className="container">
            <div className="cps">
               <div className="cps__heading">cross platform support</div>
               <div className="cps__container">
                  <span className="cps__available">Available for</span>

                  <ul className="cps__lists">
                     <li className="cps__list">
                        <Link to="/" className="cps__link cps__link--color">
                           <span>
                              <SiApple className="cps__icon" size={34} color={"#000"} />
                           </span>{" "}
                           <span className="cps__name">iOS</span>
                        </Link>
                        <span className="cps__span-icon">
                           <IoIosArrowRoundForward className="cps__icon-2" />
                        </span>
                     </li>
                     <li className="cps__list">
                        <Link to="/" className="cps__link cps__link--color">
                           <span>
                              <SiAndroid className="cps__icon" size={40} color="#000" />
                           </span>
                           <span className="cps__name">Android</span>
                        </Link>
                        <span className="cps__span-icon">
                           <IoIosArrowRoundForward className="cps__icon-2" />
                        </span>
                     </li>
                     <li className="cps__list">
                        <Link to="/" className="cps__link cps__link--color">
                           <span>
                              <AiFillWindows className="cps__icon" size={36} color={"#000"} />
                           </span>{" "}
                           <span className="cps__name">Windows</span>
                        </Link>
                        <span className="cps__span-icon">
                           <IoIosArrowRoundForward className="cps__icon-2" />
                        </span>
                     </li>
                     <li className="cps__list">
                        <Link to="/" className="cps__link cps__link--color">
                           <span>
                              <SiApple className="cps__icon" size={34} color={"#000"} />
                           </span>{" "}
                           <span className="cps__name">MacOs</span>
                        </Link>
                        <span className="cps__span-icon">
                           <IoIosArrowRoundForward className="cps__icon-2" />
                        </span>
                     </li>
                     <li className="cps__list">
                        <Link to="/" className="cps__link cps__link--color">
                           <span>
                              <FaLinux className="cps__icon" size={36} color={"#000"} />
                           </span>{" "}
                           <span className="cps__name">Linux</span>
                        </Link>
                        <span className="cps__span-icon">
                           <IoIosArrowRoundForward className="cps__icon-2" />
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default CROSSPLATFORMSUPPORT;
