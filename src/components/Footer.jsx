import React from "react";
import "../assets/css/footer";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export default function Footer() {
  return (
    <footer>
      <h3>learning</h3>
      <ul className="list-menu">
        <li>home</li>
        <li>about</li>
        <li>screenshots</li>
        <li>learning</li>
        <li>contact</li>
      </ul>

      <ul className="list-social-media">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <RiInstagramFill />
        </li>
      </ul>
    </footer>
  );
}
