import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import img from "../images/ezgif.com-gif-maker-2.png";
import Button from "./Button";

function ANTIVIRUS(props) {
   return (
      <div className="manifestation" id="antivirus" ref={props.refAntiVirus}>
         <div className="manifestation__container">
            <div className="manifestation__container--2">
               <div className="manifestation__texts">
                  <div className="manifestation__container-inner">
                     <img className="manifestation__img manifestation__img--2" src="https://virtualshield.com/_next/image?url=%2Fimages%2Fsafe.svg&w=750&q=75" alt="vpn" />
                  </div>
                  <h3 className="manifestation__headings">
                     Antivirus
                     <span>Device security</span>
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
                        <span>Real-time 24/7 monitoring & protection</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Ransomware Protection</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Lightweight and fast</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Virus Defense Promise</span>
                     </li>
                     <li className="manifestation__list">
                        <span>
                           {" "}
                           <AiFillCheckCircle className="manifestation__icon" size={27} fill={"#1ab233"} />
                        </span>
                        <span>Prevents viruses from even being downloaded</span>
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

export default ANTIVIRUS;
