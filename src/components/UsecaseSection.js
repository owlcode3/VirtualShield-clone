import React, { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { AiOutlineCaretRight } from "react-icons/ai";
import VPN from "../components/VPN";
import ANTIVIRUS from "../components/ANTIVIRUS";
import MONITORING from "../components/MONITORING";
import { useInView } from "react-intersection-observer";

function UsecaseSection() {
   const [refVPN, inViewVPN, entry1] = useInView({
      threshold: 0.7
   });

   const [refAntiVirus, inViewAntiVirus, entry2] = useInView({
      threshold: [0.4, 0.8]
   });

   const [refMNT, inViewMNT, entry3] = useInView({
      threshold: [0.4, 0.7]
   });

   return (
      <section className="use-case__section">
         <div className="container">
            <div className="use-case">
               <div className="use-case__background">
                  <ul className=" use-case__lists">
                     <ScrollIntoView selector="#vpn" smooth={true}>
                        <li className="use-case__list" style={{ color: inViewVPN ? "#000" : "#8c8c8c" }}>
                           <span className="use-case__icon-container" style={{ display: inViewVPN ? "block" : "none" }}>
                              <AiOutlineCaretRight className="use-case__icon" />
                           </span>
                           VPN
                        </li>
                     </ScrollIntoView>
                     <ScrollIntoView selector="#antivirus" smooth={true}>
                        <li className="use-case__list" style={{ color: inViewAntiVirus ? "#000" : "#8c8c8c" }}>
                           <span className="use-case__icon-container" style={{ display: inViewAntiVirus ? "block" : "none" }}>
                              <AiOutlineCaretRight className="use-case__icon" />
                           </span>
                           Antivirus
                        </li>
                     </ScrollIntoView>
                     <ScrollIntoView selector="#monitoring" smooth={true}>
                        <li className="use-case__list" style={{ color: inViewMNT ? "#000" : "#8c8c8c" }}>
                           <span className="use-case__icon-container" style={{ display: inViewMNT ? "block" : "none" }}>
                              <AiOutlineCaretRight className="use-case__icon" />
                           </span>
                           ID Monitoring
                        </li>
                     </ScrollIntoView>
                  </ul>
                  <div className="use-case__VPM">
                     <VPN refVPN={refVPN} />
                     <ANTIVIRUS refAntiVirus={refAntiVirus} />
                     <MONITORING refMNT={refMNT} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default UsecaseSection;
