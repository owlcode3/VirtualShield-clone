import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function RiskFreeSection() {
   return (
      <section className="risk-free__section">
         <div className="container" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
            <div className="risk-free">
               <img className="risk-free__image" src="https://virtualshield.com/images/risk-free.svg" alt="risk-free" />

               <div className="risk-free__container">
                  <div className="risk-free__texts">
                     <h3 className="risk-free__heading">60 days risk free!</h3>
                     <div className="risk-free__trial">
                        <div>
                           <span>
                              <AiFillCheckCircle className="manifestation__icon" size={25} fill={"#1ab233"} />
                           </span>{" "}
                           <span>30 day free trial</span>
                        </div>
                        <div>
                           <span>
                              <AiFillCheckCircle className="manifestation__icon" size={25} fill={"#1ab233"} />
                           </span>
                           <span>30 day money-back guarantee</span>
                        </div>
                     </div>
                  </div>

                  <Link to="/" className="risk-free__button">
                     Get Started{" "}
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}

export default RiskFreeSection;
