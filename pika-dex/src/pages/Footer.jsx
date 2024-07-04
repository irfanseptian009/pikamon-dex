import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer
        className=" rounded-lg  m-4"
        style={{ background: "rgb(90, 64, 145)", marginTop: "40px" }}
      >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span
            className="block text-sm text-white-500 sm:text-center"
            style={{ color: "white" }}
          >
            © 2024 Pikadex™. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
