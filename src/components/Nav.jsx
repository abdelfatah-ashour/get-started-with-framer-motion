import React from "react";
import "../assets/css/nav";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoSlack } from "react-icons/io";

export default function Nav() {
  function toggleCollapse() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active-menu");
  }

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <IoLogoSlack /> learning
          </div>
          <ul className="nav-list">
            <li>home</li>
            <li>about</li>
            <li>features</li>
            <li>screenshot</li>
            <li>contact</li>
          </ul>
          <div className="nav-options">
            <div className="login">login</div>
            <div className="sign-up">sign up</div>
          </div>
          {/* menu */}
          <button className="menu-logo" onClick={() => toggleCollapse()}>
            <AiOutlineMenu />
          </button>
          <ul className="menu-collapse active-menu" id="menu">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">features</a>
            </li>
            <li>
              <a href="#">screenshots</a>
            </li>

            <li>
              <a href="#">login</a>
            </li>
            <li>
              <a href="#">signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
