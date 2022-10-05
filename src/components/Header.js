import React, { useContext } from "react";
import NavigationBar from "./NavigationBar";
import StateContext from "./StateContext";

function Header() {
   const { isWindowScroll, isMenuClicked, windowWidth } = useContext(StateContext);
   const tabletWidth = 767;
   const isSmaller = windowWidth < tabletWidth + 1;

   return (
      <header className={`header ${isWindowScroll ? "pos-fixed" : ""}`}>
         <div className={`ip ${isWindowScroll ? "pos-fixed-2" : ""}`} style={{ display: isSmaller ? (isMenuClicked ? "none" : "flex") : "" }}>
            <div>
               IP <span className="grey ml">102.89.38.112</span>
            </div>
            <div className="ip__hide">
               ISP <span className="grey ml">MTN</span> <span className="grey">Nigeria</span>
            </div>
            <div className="ip__hide">
               Location <span className="grey ml">Lagos,</span> <span className="grey">Lagos,</span> <span className="grey">Nigeria</span>
            </div>
            <div>
               Status <span className="red ml">Unprotected</span>
            </div>
         </div>
         <NavigationBar />
      </header>
   );
}

export default Header;
