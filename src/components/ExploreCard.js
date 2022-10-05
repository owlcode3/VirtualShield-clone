import React, { useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import StateContext from "./StateContext";

function ExploreCard({ price, backgroundColor, type, typeColor, bienniaPrice, saved }) {
   const { isSwitchPressed, setIsSwitchPressed } = useContext(StateContext);

   const el = useRef();
   const q = gsap.utils.selector(el);

   useEffect(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.easeOut", autoAlpha: 1 } });
      tl.fromTo(el.current, { translateY: 200, opacity: 0 }, { translateY: 0, opacity: 1 });
      tl.fromTo(q(".card__icon"), { scale: 0, opacity: 0, translateY: 50 }, { scale: 1, opacity: 1, translateY: 0 }, "<");
   }, [isSwitchPressed]);

   return (
      <div className="card" ref={el}>
         <div className="card__header">
            <div className="card__icon" style={{ backgroundColor: backgroundColor }}>
               <svg className="card__svg" width="47" height="55" viewBox="0 0 47 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M44.3613 5.52585L24.393 0.0969448C24.1563 0.0334208 23.9124 0.000835654 23.6673 0C23.4224 0.00238322 23.1787 0.0349426 22.9417 0.0969448L2.98542 5.52585C2.3975 5.68366 1.87821 6.03191 1.50848 6.51633C1.13876 7.00076 0.939378 7.59413 0.941422 8.20395V28.0655C1.09337 31.7344 2.2618 35.2884 4.31584 38.3295C7.94424 44.1947 14.3786 49.8781 22.2764 53.8892C22.7084 54.1124 23.1874 54.2288 23.6734 54.2288C24.1594 54.2288 24.6384 54.1124 25.0703 53.8892C37.6367 47.5029 46.4053 36.9238 46.4053 28.0655V8.20395C46.4074 7.59413 46.208 7.00076 45.8383 6.51633C45.4686 6.03191 44.9493 5.68366 44.3613 5.52585ZM25.5178 45.6731C24.9709 46.0058 24.3434 46.1818 23.7036 46.1818C23.0638 46.1818 22.4363 46.0058 21.8894 45.6731C17.2438 42.9009 13.2699 39.1304 10.2543 34.6335C8.90695 32.6922 8.10493 30.4238 7.93215 28.0655V12.9906L22.8207 17.038C23.4112 17.1953 24.0324 17.1953 24.6228 17.038L39.5114 12.9906V28.0655C39.463 32.7189 34.6009 39.9897 25.5178 45.6731Z"
                     fill="white"
                  ></path>
               </svg>
            </div>

            <div className="card__texts">
               <h3>
                  VirtualShield <span style={{ color: typeColor }}>{type}</span>
               </h3>
               <div>
                  <h1>
                     {price}
                     <span>/mo</span>
                  </h1>
                  <p>
                     Billed biennially - {bienniaPrice}
                     <span>{saved}</span>
                  </p>
               </div>
            </div>
         </div>

         <ul className="card__lists">
            <li className="card__list">
               {" "}
               <span>
                  {" "}
                  <AiFillCheckCircle className="card__icons" size={26} fill={"#1ab233"} />
               </span>
               <span className="card__list__paragraph">Unlimited Devices</span>
            </li>
            <li className="card__list">
               {" "}
               <span>
                  {" "}
                  <AiFillCheckCircle className="card__icons" size={26} fill={"#1ab233"} />
               </span>
               <span className="card__list__paragraph">24/7 Support</span>
            </li>
            <li className="card__list">
               {" "}
               <span>
                  {" "}
                  <AiFillCheckCircle className="card__icons" size={26} fill={"#1ab233"} />
               </span>
               <span className="card__list__paragraph">
                  VPN <span className="grey">Internet Security</span>
               </span>
            </li>
            <li className="card__list card__list-no-display">
               {" "}
               <span>
                  {" "}
                  <AiFillCheckCircle className="card__icons" size={26} fill={"#1ab233"} />
               </span>
               <span className="card__list__paragraph">1 user</span>
            </li>
            <li className="card__list green card__list-none">full access</li>
            <li className="card__list grey card__list-none">available</li>
            <li className="card__list grey card__list-none">no access</li>
            <li className="card__list grey card__list-none">available</li>
         </ul>
         <div className="card__button-container">
            <Link to="/" className="card__button">
               Choose Plan{" "}
            </Link>
            <h3>30 day trial · All prices are shown in USD</h3>
         </div>
      </div>
   );
}

export default ExploreCard;
