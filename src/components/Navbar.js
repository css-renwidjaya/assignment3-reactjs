import Navitem from "./Navitem";
import React, { Component } from "react";
import profile from "../assets/img/profile.jpeg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <img src={profile} alt="ProfilePic" className="profilepic"></img>
        <ul>
          <Navitem
            item="About"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Experience"
            tolink="/experience"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Skills"
            tolink="/skills"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Interest"
            tolink="/interest"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Awards"
            tolink="/awards"
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
