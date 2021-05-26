import React from "react";

function Footer(props) {
  return (
    <>
    <p className="p-5">
    <footer className="footer mt-auto fixed-bottom">
        <a href="https://www.linkedin.com/in/sung-kim-2824331bb/" rel="noreferrer" target="_blank" id="social" alt="linkedin"><img src="assets\images\linkedin.png" alt="linkedin pic"/></a>
        <a href="https://www.facebook.com/sung.kim.75470" rel="noreferrer" target="_blank" id="social" alt="facebook"><img src="assets\images\facebook.png" alt="facebook pic"/></a>
        <a href="mailto:sungjk77@msn.com" id="social" alt="email"><img src="assets\images\gmail.png" alt="email icon"/></a>
        <a href="https://twitter.com/@sungjk7" rel="noreferrer" target="_blank" id="social" alt="twitter"><img src="assets\images\twitter.png" alt="twitter pic"/></a>
    </footer>
    </p>
    </>
  );
}

export default Footer;
