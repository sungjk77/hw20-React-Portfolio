import React from "react";

function About() {
  return (
    <div className="jumbotron jumbotron-fluid text-white container">
      <h1 className="display-4">About Me</h1>
      <div className="d-flex align-items-end">
        <p className="lead">
          I'm just starting my journey as a web designer. I work out of the Seattle area but have lived all over the country. Please feel free to take a look at my <a href="assets/files/SJK-resume.pdf">résumé</a>.  Please contact me if you need any assistance. I work well in team environments but have been known to take on solo projects all the time.
        </p>
        <img src="assets/images/Sung.png" alt="Sung's Pic" height="100px" width="100px" />
      </div>
    </div>
  );
}

export default About;
