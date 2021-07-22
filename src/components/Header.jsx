import React from "react";
import "../assets/css/header";
import { GrGooglePlay, GrAppleAppStore } from "react-icons/gr";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper-content-header">
          <div className="wrapper-content">
            <small>Are you reedy to learn ?</small>
            <h3>
              learn on your
              <span>
                class <br /> schedule
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Incidunt maxime itaque beatae mollitia odio debitis commodi
              libero.
            </p>
            <div className="wrapper-button-header">
              <div className="store">
                <span className="icon-store">
                  <GrGooglePlay />
                </span>
                <span>google play</span>
              </div>
              <div className="store">
                <span className="icon-store">
                  <GrAppleAppStore />
                </span>
                <span>apple store</span>
              </div>
            </div>
          </div>
          <div className="wrapper-courses">
            <div>platform 1</div>
            <div>platform 2</div>
            <div>platform 3</div>
            <div>platform 4</div>
          </div>
        </div>
      </div>
    </header>
  );
}
