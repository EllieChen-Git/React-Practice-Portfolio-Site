import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="myAvatar.png" alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>HTML/CSS | Ruby on Rails | JavaScript | MERN Stack</p>
              {/* Social Links */}
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/elliettchen/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/EllieChen-Git"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Resume */}
                <a
                  href="Ellie Chen - Resume.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-file" aria-hidden="true" />
                </a>
                {/* Medium */}
                <a
                  href="https://medium.com/@elliechen.etc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-medium" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;