import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Link to="/">
      <button className="button text-white font-semibold py-2 px-2 rounded-md mb-3 flex items-center gap-2">
          <IoMdArrowBack className="w-5 h-5" /> <p> Back Home</p>
        </button>
      </Link>
      <div className="bg-gray-100 p-2 md:p-12 rounded-3xl shadow-2xl text-center mb-12"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "18px",
            color: "rgb(90, 64, 145)",
            marginTop:"28px"
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            padding: "0 80px"
          }}
        >
          We'd love to hear from you! Reach out to us through any of our social media channels for inquiries, support, or just to say hello.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="flex items-center justify-center gap-2"
            style={{
              width: "33.33%",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <FaGithub style={{fontSize: "36px"}} />
            <i
              className="fab fa-github"
              style={{
                fontSize: "36px",
                color: "#666",
                marginBottom: "10px",
              }}
            />
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#337ab7",
                "&:hover": {
                  color: "#23527c",
                },
              }}
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center gap-2"
            style={{
              width: "33.33%",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <FaFacebook style={{fontSize: "36px"}} />
            <i
              className="fab fa-facebook-f"
              style={{
                fontSize: "36px",
                color: "#666",
                marginBottom: "10px",
              }}
            />
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#337ab7",
                "&:hover": {
                  color: "#23527c",
                },
              }}
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center justify-center gap-2"
            style={{
              width: "33.33%",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <BiLogoInstagramAlt style={{fontSize: "36px"}} />
            <i
              className="fab fa-instagram"
              style={{
                fontSize: "36px",
                color: "#666",
                marginBottom: "10px",
              }}
            />
            <a
              href="https://www.instagram.com/your-instagram-username"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#337ab7",
                "&:hover": {
                  color: "#23527c",
                },
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
