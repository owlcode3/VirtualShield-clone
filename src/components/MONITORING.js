import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import img from "../images/ezgif.com-gif-maker-3.png";
import Button from "./Button";

function MONITORING(props) {
   return (
      <div className="manifestation" id="monitoring" ref={props.refMNT}>
         <div className="manifestation__container">
            <div className="manifestation__container--2">
               <div className="manifestation__texts">
                  <div className="manifestation__container-inner">
                     <img className="manifestation__img manifestation__img--3" src="https://virtualshield.com/_next/image?url=%2Fimages%2Fdigital-world.svg&w=750&q=75" alt="vpn" />
                  </div>
                  <h3 className="manifestation__headings">
                     ID Monitoring
                     <span>identity security</span>
                  </h3>
                  <div className="manifestation__paragraph">
                     <p>
                        Our industry leading VPN will keep you private and secure when browsing the Internet. We offer you the highest level of privacy by utilizing military-grade encryption and
                        strict no-log policies.
                     </p>
                  </div>
                  <ul className="manifestation__lists">
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>24/7 US-Based White Glove Restoration</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>$1 Million of Insurance</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Social Security Protection</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Dark Web Monitoring</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Real Time Alerts</span>
                     </li>
                  </ul>
                  <div className="manifestation__btn-long">
                     <Button learnMore={true} />
                  </div>
               </div>

               <div className="manifestation__image">
                  <img src={img} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MONITORING;
