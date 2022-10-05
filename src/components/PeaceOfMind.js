import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function PeaceOfMind() {
   return (
      <section className="peace-of-mind__section">
         <div className="container">
            <div className="peace-of-mind">
               <div className="peace-of-mind__texts" data-aos="zoom-in-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                  <h2 className="peace-of-mind__heading">
                     <span> Peace of mind is </span> only one step away.
                  </h2>
                  <h3 className="peace-of-mind__heading-2">Starting at only $3.49 per month.</h3>
                  <Link to="/" className="peace-of-mind__trial">
                     <div>
                        <span>start free</span>
                        <span>trial</span>
                     </div>
                     <span>
                        <IoIosArrowRoundForward size={30} className="peace-of-mind__icon" />
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PeaceOfMind;
