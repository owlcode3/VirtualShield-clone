import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CROSSPLATFORMSUPPORTSECTION from "./components/CROSSPLATFORMSUPPORTSECTION";
import UsecaseSection from "./components/UsecaseSection";
import RiskFreeSection from "./components/RiskFreeSection";
import PeaceOfMind from "./components/PeaceOfMind";
import ExploreSection from "./components/ExploreSection";
import AppListSection from "./components/AppListSection";
import StateContext from "./components/StateContext";
import Footer from "./components/Footer";
import ChatBtn from "./components/ChatBtn";

export function App() {
   const [isWindowScroll, setIsWindowScroll] = useState();
   const [isMenuClicked, setIsMenuClicked] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [isSwitchPressed, setIsSwitchPressed] = useState(true);

   useEffect(() => {
      AOS.init({
         duration: 1700
      });
   }, []);

   useEffect(() => {
      window.addEventListener("scroll", handleScrollDocument);

      return () => window.removeEventListener("scroll", handleScrollDocument);
   }, []);

   function handleScrollDocument() {
      const curPos = 0;
      if (window.scrollY > curPos) setIsWindowScroll(true);
      if (window.scrollY === curPos) setIsWindowScroll(false);
   }

   return (
      <StateContext.Provider value={{ isWindowScroll, setIsWindowScroll, isMenuClicked, setIsMenuClicked, windowWidth, setWindowWidth, isSwitchPressed, setIsSwitchPressed }}>
         <BrowserRouter>
            <Header />
            <AppListSection />
            <HeroSection />
            <UsecaseSection />
            <CROSSPLATFORMSUPPORTSECTION />
            <ExploreSection />
            <RiskFreeSection />
            <PeaceOfMind />
            <ChatBtn />
            <Footer />
         </BrowserRouter>
      </StateContext.Provider>
   );
}
