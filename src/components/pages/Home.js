import React from "react";
import PageCard from "../PageCard"

function Home(props) {
  return (
    <div className="text-white container jumbotron jumbotron-fluid">
      <h1 className="display-4">Thanks for taking a look at my Portfolio!</h1>
      <PageCard projects = {props.projects} />
    </div> 
  );
}

export default Home;
