import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import projects from "./projects.json"

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home",
    projects
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = ()=> {
    if(this.state.currentPage==="Home") {
      return <Home projects={this.state.projects}/>
    } else if(this.state.currentPage==="About") {
      return <About />
    } else if(this.state.currentPage==="Contact") {
      return <Contact />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}

        <Footer/>
      </div>

    );
  }
}

export default PortfolioContainer;
