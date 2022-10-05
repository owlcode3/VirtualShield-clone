import React, { useContext, useState } from "react";
import StateContext from "./StateContext";
import ExploreCard from "./ExploreCard";

function ExploreSection() {
   const { isSwitchPressed, setIsSwitchPressed } = useContext(StateContext);

   const [isCouponOpen, setIsCouponOpen] = useState(true);

   const [isOptionOpen, setIsOptionOpen] = useState(true);

   return (
      <div className="explore__section">
         <div className="container">
            <div className="explore">
               <div className="explore__left-side">
                  <div className="explore__heading" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                     <h1>
                        <span>explore</span>
                        <span>plans & pricing</span>{" "}
                     </h1>
                     <h3>Choose the plan that works best for you.</h3>
                  </div>

                  <div className="explore__users-form">
                     <div className="explore__users" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                        <div className="explore__personal">
                           <h1>Personal</h1>
                           <h2>(1 user)</h2>
                        </div>
                        <div className="explore__switch">
                           <div onClick={() => setIsSwitchPressed(!isSwitchPressed)} className="explore__switch--body" style={{ background: isSwitchPressed ? "#888888" : "#008800" }}></div>
                           <div
                              onClick={() => setIsSwitchPressed(!isSwitchPressed)}
                              className="explore__switch--over"
                              style={{ transform: `translateX(${isSwitchPressed ? "0.1rem" : "2.9rem"})` }}
                           ></div>
                        </div>
                        <div className="explore__personal">
                           <h1>Family</h1>
                           <h2>(5 users)</h2>
                        </div>
                     </div>

                     <div className="explore__option">
                        <div className="explore__open">
                           <span className="explore__years-1 explore__years">
                              2 years <span>save 46%</span>
                           </span>{" "}
                           <span onClick={() => setIsOptionOpen(!isOptionOpen)} className="explore__open-icon">
                              <img style={{ rotate: isOptionOpen ? "" : "180deg" }} src="https://virtualshield.com/images/icon-arrow-down.svg" alt="arrow-down" />
                           </span>
                        </div>

                        <ul className="explore__close" style={{ display: isOptionOpen ? "none" : "flex" }}>
                           <li className="explore__years-2 explore__years explore__years--bb">
                              monthly <span>save 0%</span>
                           </li>
                           <li className="explore__years-3 explore__years explore__years--bb">
                              yearly <span>save 31%</span>
                           </li>
                           <li className="explore__years-1 explore__years explore__years--bb explore--bg">
                              2 years <span>save 46%</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <ul className="explore__lists" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/Bank-Account.svg" alt="risk-free" />
                        </span>{" "}
                        <span>60 days risk-free</span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/Support.svg" alt="support" />
                        </span>{" "}
                        <span>24/7 support</span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/Mobile.svg" alt="unlimited devices" />
                        </span>{" "}
                        <span>unlimited devices</span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/vpn.svg" alt="vpn" />
                        </span>{" "}
                        <span>
                           VPN <span className="grey">internet security</span>
                        </span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/vpn.svg" alt="vpn+" />
                        </span>{" "}
                        <span>
                           VPN+ <span className="grey">add & malware blocking , more....</span>
                        </span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/antivirus.svg" alt="antivirus" />
                        </span>{" "}
                        <span>
                           antivirus <span className="grey">device security</span>
                        </span>
                     </li>

                     <li className="explore__list">
                        <span className="explore__icon">
                           <img src="https://virtualshield.com/images/monitoring.svg" alt="id monitoring" />
                        </span>{" "}
                        <span>
                           id monitoring <span>identity security</span>
                        </span>
                     </li>
                  </ul>

                  <div className="explore__coupon-option-2">
                     <div className="explore__coupon">
                        <div className="explore__label">
                           <span className="explore__label--1">Have a coupon code?</span>{" "}
                           <span onClick={() => setIsCouponOpen(!isCouponOpen)} className="explore__label--2">
                              <img style={{ rotate: isCouponOpen ? "" : "180deg" }} src="https://virtualshield.com/images/icon-arrow-down.svg" alt="arrow-down" />
                           </span>
                        </div>
                        <div className="explore__input" style={{ display: isCouponOpen ? "none" : "flex" }}>
                           <input type="text" id="input" className="explore__input--value" placeholder="Enter your coupon code" />
                           <button to="/" className="explore__input--btn">
                              Apply
                           </button>
                        </div>
                     </div>

                     <div className="explore__option-2">
                        <div className="explore__option-2-child">
                           <div className="explore__option-2-icon">
                              <img src="https://virtualshield.com/images/Bank-Account.svg" alt="card" />
                           </div>
                           <p>
                              All VirtualShield products come with our 60 days risk-free promise. This includes a <span>30 day</span> <span>free trial</span>, along with a{" "}
                              <span>30 day money-back guarantee.</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="explore__right-side" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                  <ul className="explore__lists-2">
                     <li className="explore__list-2">
                        monthly <span>save 0%</span>
                     </li>
                     <li className="explore__list-2">
                        yearly <span>save 31%</span>
                     </li>
                     <li className="explore__list-2">
                        2 years <span>save 46%</span>
                     </li>
                  </ul>
                  <div className="explore__cards">
                     {isSwitchPressed ? (
                        <ExploreCard price={"$6.99"} backgroundColor={"#777e8d"} type={"VPN"} bienniaPrice={"$167.76"} saved={"Save $144"} />
                     ) : (
                        <ExploreCard price={"$14.99"} backgroundColor={"#777e8d"} type={"VPN"} bienniaPrice={"$359.76"} saved={"Save $360"} />
                     )}
                     {isSwitchPressed ? (
                        <ExploreCard price={"$19.99"} type={"One"} typeColor={"#fb0023"} bienniaPrice={"$479.76"} saved={"Save $240"} />
                     ) : (
                        <ExploreCard price={"$29.99"} type={"One"} typeColor={"#fb0023"} bienniaPrice={"$719.76"} saved={"Save $480"} />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ExploreSection;
