import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import img from "../images/ezgif.com-gif-maker.png";
import Button from "./Button";

function VPN(props) {
   return (
      <div className="manifestation" id="vpn" ref={props.refVPN}>
         <div className="manifestation__container">
            <div className="manifestation__container--2">
               <div className="manifestation__texts">
                  <div className="manifestation__container-inner">
                     <img className="manifestation__img" src="https://virtualshield.com/_next/image?url=%2Fimages%2Flocked.svg&w=750&q=75" alt="vpn" />
                  </div>
                  <h3 className="manifestation__headings">
                     VPN
                     <span>internet security</span>
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
                        <span>No-log policy</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Fastest VPN speeds, no internet slowdown</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Unlimited tracking and data</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Global VPN Network</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Ad blocking</span>
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

export default VPN;
