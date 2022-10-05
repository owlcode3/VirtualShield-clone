import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer-mobile">
               <div className="footer-mobile__name-social">
                  <div className="footer-mobile__logo">
                     <img src="https://virtualshield.com/images/logo.svg" alt="" />
                  </div>
                  <div className="footer-mobile__icons">
                     <AiOutlineTwitter />
                     <AiOutlineInstagram />
                     <GrFacebookOption />
                  </div>
               </div>

               <ul className="footer-mobile__lists  footer-mobile__lists--1">
                  <li>VirtualShield One</li>
                  <li>VirtualShield VPN</li>
                  <li>Features</li>
                  <li>Apps</li>
                  <li>Test my protection</li>
               </ul>

               <ul className="footer-mobile__lists  footer-mobile__lists--2">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
               </ul>
            </div>
            <div className="footer-top">
               <div className="container">
                  <div className="footer-top__container">
                     <div className="footer-top__name-social">
                        <div className="footer-top__logo">
                           <img src="https://virtualshield.com/images/logo.svg" alt="" />
                        </div>

                        <div className="footer-top__paragraph">
                           <p>VirtualShield offers services to protect your online privacy and data. We truly believe that you have the right to remain private.</p>
                        </div>
                        <div className="footer-top__icons">
                           <AiOutlineTwitter />
                           <AiOutlineInstagram />
                           <GrFacebookOption />
                        </div>
                     </div>

                     <div className="footer-top__details">
                        <ul className="footer-top__lists">
                           <li>Products</li>
                           <li>VirtualShield One</li>
                           <li>VirtualShield VPN</li>
                        </ul>

                        <ul className="footer-top__lists">
                           <li>Features</li>
                           <li>VPN</li>
                           <li>VPN Plus</li>
                           <li>Antivirus</li>
                           <li>ID Monitoring</li>
                           <li>All features</li>
                        </ul>

                        <ul className="footer-top__lists">
                           <li>Apps</li>
                           <li>iOS</li>
                           <li>Android</li>
                           <li>Windows</li>
                           <li>MacOS</li>
                           <li>Linux</li>
                        </ul>

                        <ul className="footer-top__lists">
                           <li>Resources</li>
                           <li>What is my IP?</li>
                           <li>Test My Protection</li>
                           <li>Free Dark Web Scan</li>
                           <li>What is a VPN?</li>
                           <li>What is ID Monitoring?</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="footer-bottom">
               <div className="container">
                  <div className="footer-bottom__container">
                     <div className="footer-bottom__copyright">
                        <span>2022</span>
                        <span>&copy;</span>
                        <span>Copyright</span>
                        <span>VirtualShield</span>
                        <span>LLC</span>
                     </div>

                     <ul className="footer-bottom__lists">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>DMCA Policies</li>
                        <li>EULA</li>
                        <li>Export Control Policy</li>
                        <li>Affiliate Terms</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
