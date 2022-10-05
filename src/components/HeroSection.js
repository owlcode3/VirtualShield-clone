import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { AiFillCheckCircle } from "react-icons/ai";
import android_img from "../images/android-banner-vpn.png";
import HeroButton from "./HeroButton";

function HeroSection() {
   const el = useRef();
   const q = gsap.utils.selector(el);
   useEffect(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.easeOut", autoAlpha: 1 } });
      tl.fromTo(q(".hero__heading"), { yPercent: 150, opacity: 0 }, { yPercent: 0, opacity: 1 });
      tl.fromTo(q(".hero__paragraph"), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 }, "-=0.3");
      tl.fromTo(q(".btn__animate"), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 }, "<");
   }, []);

   return (
      <section className="hero__section" ref={el}>
         <div className="hero">
            <div className="hero__texts">
               <div className="hero__heading">
                  <h1>
                     Try VirtualShield for <span>Android</span>
                  </h1>
               </div>

               <div className="hero__paragraph">
                  <p>
                     Built from the ground up specifically for privacy protection.<span>Our network is fast, reliable, secure, and always available.</span>Plus, it's completely FREE for 30 days.
                  </p>
               </div>
               <HeroButton />

               <div className="hero__trial" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
                  <div className="hero__trial--ft">
                     <span>
                        <AiFillCheckCircle className="hero__trial--icon" size={20} fill={"#1ab233"} />
                     </span>
                     <span className="hero__trial--text">30 Day Free Trial</span>
                  </div>
                  <div className="hero__trial--ft">
                     <span>
                        <AiFillCheckCircle className="hero__trial--icon" size={20} fill={"#1ab233"} />
                     </span>
                     <span className="hero__trial--text">30 Day Money-back Guarantee</span>
                  </div>
               </div>
            </div>

            <div className="hero__image__container">
               <img className="hero__image" src={android_img} alt="android image" />
            </div>

            <div className="hero__qualities" data-aos="fade-up" data-aos-once="true" data-aos-anchor-easing="ease-out">
               <div className="hero__quality">
                  <span className="hero__quality--icon hero__quality--icon--1">
                     <img src="https://virtualshield.com/images/0-unlimited-device.svg" alt="unlimited devices" />
                  </span>
                  <span>Unlimited devices</span>
               </div>

               <div className="hero__quality">
                  <span className="hero__quality--icon hero__quality--icon--2">
                     <img src="https://virtualshield.com/images/easy-to-use.svg" alt="easy to use" />
                  </span>
                  <span>Easy to use</span>
               </div>

               <div className="hero__quality">
                  <span className="hero__quality--icon hero__quality--icon--3">
                     <img src="https://virtualshield.com/images/cross-platform-support.svg" alt="cross platform supported" />
                  </span>
                  <span>Cross platform supported</span>
               </div>
               <div className="hero__quality">
                  <span className="hero__quality--icon hero__quality--icon--4">
                     <img src="https://virtualshield.com/images/power-by-ai.svg" alt="no log policy" />
                  </span>
                  <span>No log policy</span>
               </div>

               <div className="quality__container">
                  <div className="hero__quality">
                     <span className="hero__quality--icon hero__quality--icon--1">
                        <img src="https://virtualshield.com/images/0-unlimited-device.svg" alt="unlimited devices" />
                     </span>
                     <span>Unlimited devices</span>
                  </div>

                  <div className="hero__quality">
                     <span className="hero__quality--icon hero__quality--icon--3">
                        <img src="https://virtualshield.com/images/cross-platform-support.svg" alt="cross platform supported" />
                     </span>
                     <span>Cross platform supported</span>
                  </div>
               </div>
               <div className="quality__container">
                  <div className="hero__quality">
                     <span className="hero__quality--icon hero__quality--icon--2">
                        <img src="https://virtualshield.com/images/easy-to-use.svg" alt="easy to use" />
                     </span>
                     <span>Easy to use</span>
                  </div>
                  <div className="hero__quality">
                     <span className="hero__quality--icon hero__quality--icon--4">
                        <img src="https://virtualshield.com/images/power-by-ai.svg" alt="no log policy" />
                     </span>
                     <span>No log policy</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default HeroSection;
