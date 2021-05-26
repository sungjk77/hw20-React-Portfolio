import React from "react";

function Contact() {
  return (
    <div className="text-white container jumbotron jumbotron-fluid">
      <h1 className="display-4">Contact Page</h1>
      <p className="lead">
        <ul>
        <li>  (425) 413-1096</li>
      <li><a href="https://www.linkedin.com/in/sung-kim-2824331bb/" rel="noreferrer" target="_blank" id="social" alt="linkedin">linkedIn</a></li>
      <li><a href="https://www.facebook.com/sung.kim.75470" rel="noreferrer" target="_blank" id="social" alt="facebook">facebook</a></li>
      <li><a href="mailto:sungjk77@msn.com" id="social" alt="email">sungjk@uw.edu</a></li>
      <li><a href="https://twitter.com/@sungjk7" rel="noreferrer" target="_blank" id="social" alt="twitter">twitter</a></li>
        </ul>
      </p>
    </div>
  );
}

export default Contact;
