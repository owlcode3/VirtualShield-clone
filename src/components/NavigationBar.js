import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "./StateContext";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";
import HeroButton from "./HeroButton";

function NavigationBar() {
   const { isMenuClicked, setIsMenuClicked, isWindowScroll, setIsWindowScroll, windowWidth, setWindowWidth } = useContext(StateContext);

   const [isProductsClicked, setIsProductsClicked] = useState(false);
   const [isFeaturesClicked, setIsFeaturesClicked] = useState(false);
   const [isResourcesClicked, setIsResourcesClicked] = useState(false);

   const desktopWidth = 1280;
   const ifSmaller = windowWidth < desktopWidth + 1;
   const ifBigger = windowWidth > desktopWidth - 1;

   // Get the current size of the window width...
   useEffect(() => {
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
   }, []);

   // Close all the opened hamburger menu link if hamburger menu is not in view, which will happen if current window width is > 1280 and also
   // show the window overflowY is the hamburger menu is still opened and the window width is over 1280 else
   // hide it when the hamburger menu is opened and the window width is is less or equal to 1280
   useEffect(() => {
      if (windowWidth > desktopWidth) {
         setIsFeaturesClicked(false);
         setIsProductsClicked(false);
         setIsResourcesClicked(false);
      }

      if (windowWidth > desktopWidth && isMenuClicked) {
         document.body.style.overflowY = "";
      } else if ((windowWidth <= desktopWidth) & isMenuClicked) {
         document.body.style.overflowY = "hidden";
      }
   }, [windowWidth]);

   // If hamburger menu is clicked, hide the the window overflowY, else show it
   useEffect(() => {
      if (isMenuClicked) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "";
      }
   }, [isMenuClicked]);

   // If any of the hamburger menu link is clicked while one is already open, close the already opened one before opening the current target
   function checkIfTrueProducts() {
      if (isFeaturesClicked || isResourcesClicked) {
         setIsFeaturesClicked(false);
         setIsResourcesClicked(false);
      }
      setIsProductsClicked(!isProductsClicked);
   }
   function checkIfTrueFeatures() {
      if (isProductsClicked || isResourcesClicked) {
         setIsProductsClicked(false);
         setIsResourcesClicked(false);
      }
      setIsFeaturesClicked(!isFeaturesClicked);
   }
   function checkIfTrueResources() {
      if (isFeaturesClicked || isProductsClicked) {
         setIsFeaturesClicked(false);
         setIsProductsClicked(false);
      }
      setIsResourcesClicked(!isResourcesClicked);
   }

   // Actions to happen when hamburger menu is clicked
   function whenClickedMenu() {
      setIsFeaturesClicked(false);
      setIsProductsClicked(false);
      setIsResourcesClicked(false);
      ifSmaller && setIsMenuClicked(!isMenuClicked);
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   }

   return (
      <nav className="navbar__navbar" style={{ padding: ifBigger ? (isWindowScroll ? "0" : "2.2rem 0") : "0" }}>
         <div className="container">
            <div className="navbar">
               <input onClick={whenClickedMenu} title="" type="checkbox" className="navbar__checkbox" id="checkbox" />
               <label className="navbar__hamburger">
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
               </label>
               <div className="navbar__logo">
                  <Link to={"/"}>
                     <img className="navbar__logo__image" src="https://virtualshield.com/images/logo.svg" alt="logo image" />
                  </Link>
               </div>
               <div className="navbar__desktop__container">
                  <ul className="navbar__lists navbar__lists-1">
                     <li {...(ifSmaller && { onClick: checkIfTrueProducts })} className="navbar__list navbar__list--hover navbar__list--dropdown" style={{ padding: isWindowScroll ? " 2rem 0" : "" }}>
                        <div className="navbar__dropdown">
                           <span style={{ color: isProductsClicked ? "#fb0023" : "" }}>Products </span>
                           <span className="navbar__icon">
                              <MdArrowDropDown style={{ rotate: isProductsClicked ? "180deg" : "", color: isProductsClicked ? "#fb0023" : "" }} className="navbar__icon--child" size={22} />
                           </span>
                        </div>
                        <div className="navbar__products" style={{ display: isProductsClicked ? "flex" : "", top: isWindowScroll ? "7.4rem" : "5.6rem" }}>
                           <div className="navbar__products__container">
                              <span className="navbar__products--icon-1">
                                 <img src="https://virtualshield.com/images/h-virtual-shield-one.svg" alt="virus-defense" />
                              </span>
                              <div className="navbar__products__container--1">
                                 <h2 className="navbar__products__heading navbar__products__heading-1">VirtualShield One</h2>
                                 <h3 className="navbar__products__paragraph">A Single Application For All Your Security Needs.</h3>
                              </div>
                           </div>
                           <div className="navbar__products__container">
                              <span className="navbar__products--icon-2">
                                 {" "}
                                 <img src="https://virtualshield.com/images/h-virtual-shield-one.svg" alt="virus-defense" />
                              </span>
                              <div className="navbar__products__container--1">
                                 <h2 className="navbar__products__heading">VirtualShield VPN</h2>
                                 <h3 className="navbar__products__paragraph">The Protection Of A Vpn With A Few Bonuses.</h3>
                              </div>
                           </div>
                        </div>
                     </li>

                     <li {...(ifSmaller && { onClick: checkIfTrueFeatures })} className="navbar__list navbar__list--hover navbar__list--dropdown">
                        <div className="navbar__dropdown">
                           <span style={{ color: isFeaturesClicked ? "#fb0023" : "" }}>Features</span>
                           <span className="navbar__icon">
                              <MdArrowDropDown style={{ rotate: isFeaturesClicked ? "180deg" : "", color: isFeaturesClicked ? "#fb0023" : "" }} className="navbar__icon--child" size={22} />
                           </span>
                        </div>

                        <div className="navbar__features" style={{ display: isFeaturesClicked ? "flex" : "", top: isWindowScroll ? "7.4rem" : "5.6rem" }}>
                           <ul className="navbar__features__container">
                              <li className="navbar__features__list">
                                 <h2 className="navbar__features__heading">vpn</h2>
                                 <div className="navbar__features__container--child">
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/h-SecureVPN.svg" alt="secureVPN" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">virtual private network</span>
                                    </div>
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/vpnplus.svg" alt="vpnPlus" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">vpn plus</span>
                                    </div>
                                 </div>
                              </li>

                              <li className="navbar__features__list">
                                 <h2 className="navbar__features__heading">antivirus</h2>
                                 <div className="navbar__features__container--child">
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/h-Antivirus.svg" alt="h-Antivirus" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">antivirus</span>
                                    </div>
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/h-virus-defense-promise.svg" alt="defense-promise" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">virus defense promise</span>
                                    </div>
                                 </div>
                              </li>

                              <li className="navbar__features__list">
                                 <h2 className="navbar__features__heading">identity protection</h2>
                                 <div className="navbar__features__container--child">
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/h-Fingerprint.svg" alt="h-Fingerprint" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">identity protection</span>
                                    </div>
                                    <div className="navbar__features__container--children">
                                       <span className="navbar__features__icon">
                                          <img src="https://virtualshield.com/images/h-dark-web-monitoring.svg" alt="h-dark-web-monitoring" />
                                       </span>{" "}
                                       <span className="navbar__features__paragraph">dark web monitoring</span>
                                    </div>
                                 </div>
                              </li>
                           </ul>

                           <div className="navbar__features__container navbar__features__container--saf">
                              <h3>
                                 <span>See all features </span>
                                 <span className="navbar__features__icon__saf">
                                    <IoIosArrowRoundForward />
                                 </span>
                              </h3>
                           </div>
                        </div>
                     </li>
                     <li className="navbar__list navbar__list--hover">Apps</li>
                     <li className="navbar__list navbar__list--hover">Use Cases</li>
                     <li className="navbar__list navbar__list--hover">Pricing</li>
                  </ul>{" "}
                  <ul className="navbar__lists navbar__lists-2">
                     <li {...(ifSmaller && { onClick: checkIfTrueResources })} className="navbar__list navbar__list--hover navbar__list--dropdown">
                        <div className="navbar__dropdown">
                           <span style={{ color: isResourcesClicked ? "#fb0023" : "" }}>Resources </span>
                           <span className="navbar__icon">
                              <MdArrowDropDown style={{ rotate: isResourcesClicked ? "180deg" : "", color: isResourcesClicked ? "#fb0023" : "" }} className="navbar__icon--child" size={22} />
                           </span>
                        </div>

                        <div className="navbar__resources" style={{ display: isResourcesClicked ? "flex" : "", top: isWindowScroll ? "7.4rem" : "5.6rem" }}>
                           <ul className="navbar__resources__container">
                              <li className="navbar__resources__list">
                                 <h2 className="navbar__resources__heading">tools</h2>
                                 <div className="navbar__resources__container--child">
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">test my protection</span>
                                    </div>
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">dark web scan</span>
                                    </div>
                                 </div>
                              </li>

                              <li className="navbar__resources__list">
                                 <h2 className="navbar__resources__heading">learn</h2>
                                 <div className="navbar__resources__container--child">
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">what is a VPN?</span>
                                    </div>
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">what is antiVirus?</span>
                                    </div>
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">what is ID protection</span>
                                    </div>
                                 </div>
                              </li>

                              <li className="navbar__resources__list">
                                 <h2 className="navbar__resources__heading">network</h2>
                                 <div className="navbar__resources__container--child">
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">our servers</span>
                                    </div>
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">USA</span>
                                    </div>
                                    <div className="navbar__resources__container--children">
                                       <span className="navbar__resources__paragraph">Canada</span>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </li>

                     <li className="navbar__list navbar__list--hover navbar__list--help">Help</li>
                     <li className="navbar__list navbar__list--hover navbar__list--login">
                        <span className="navbar__icon--login">
                           <svg fill="none" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 stroke={"currentColor"}
                                 d="M13.9998 2.80098C13.9998 2.80098 7.83984 2.57216 7.83984 8.4867C7.83984 14.4012 11.0854 19.0398 13.9998 19.0398C16.9143 19.0398 20.1598 14.4012 20.1598 8.4867C20.1598 2.57216 13.9998 2.80098 13.9998 2.80098Z"
                              ></path>
                              <path
                                 stroke={"currentColor"}
                                 d="M9.62494 15.6797C9.62494 15.6797 4.48047 16.8441 4.48047 20.2173C4.48047 23.5905 6.50625 25.1997 14.0005 25.1997C21.4947 25.1997 23.5205 23.5905 23.5205 20.2173C23.5205 16.8441 18.376 15.6797 18.376 15.6797"
                              ></path>
                           </svg>
                        </span>{" "}
                        <span>Login</span>
                     </li>
                     <Button />

                     <div className="navbar__hamburger__gs">
                        <div className="navbar__hamburger__icon">
                           <span className="navbar__icon--login">
                              <svg fill="none" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    stroke={"currentColor"}
                                    d="M13.9998 2.80098C13.9998 2.80098 7.83984 2.57216 7.83984 8.4867C7.83984 14.4012 11.0854 19.0398 13.9998 19.0398C16.9143 19.0398 20.1598 14.4012 20.1598 8.4867C20.1598 2.57216 13.9998 2.80098 13.9998 2.80098Z"
                                 ></path>
                                 <path
                                    stroke={"currentColor"}
                                    d="M9.62494 15.6797C9.62494 15.6797 4.48047 16.8441 4.48047 20.2173C4.48047 23.5905 6.50625 25.1997 14.0005 25.1997C21.4947 25.1997 23.5205 23.5905 23.5205 20.2173C23.5205 16.8441 18.376 15.6797 18.376 15.6797"
                                 ></path>
                              </svg>
                           </span>
                           <span>Login</span>
                        </div>
                        <HeroButton long={true} />
                     </div>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default NavigationBar;
