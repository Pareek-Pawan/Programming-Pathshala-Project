import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col p-2 bg-paleBlack justify-center items-center fixed
             inset-x-0
             bottom-0"
      >
        <div className="flex space-x-4 mb-2">
          <a href="https://twitter.com/Kabira_XDD">
            <FaTwitter color="#00acee" />
          </a>
          <a href="https://www.instagram.com/_pawan_pareek/">
            <FaInstagram color="#E1306C" />
          </a>
          <a href="https://www.linkedin.com/in/pawan-pareek-2001/">
            <FaLinkedin color="#0077b5" />
          </a>
          <a href="https://github.com/Pareek-Pawan">
            <ImGithub color="#fff" />
          </a>
        </div>
        <div className="text-paleWhite text-xs ">
          Made with 💜 by Pawan Pareek.
        </div>
      </div>
    </>
  );
};

export default Footer;
