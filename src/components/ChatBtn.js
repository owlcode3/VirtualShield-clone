import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function ChatBtn() {
   const el = useRef();
   useEffect(() => {
      setTimeout(() => {
         gsap.fromTo(el.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "power1.easeOut", autoAlpha: 1 });
      }, 2000);
   }, []);

   return (
      <div className="chat" ref={el}>
         <div className="chat__icon"></div>
      </div>
   );
}

export default ChatBtn;
