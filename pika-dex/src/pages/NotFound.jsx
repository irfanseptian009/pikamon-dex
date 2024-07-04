import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Contact Us
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '30px',
        }}
      >
        Get in touch with us through our social media channels:
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '33.33%',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <i
            className="fab fa-github"
            style={{
              fontSize: '36px',
              color: '#666',
              marginBottom: '10px',
            }}
          />
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#337ab7',
              '&:hover': {
                color: '#23527c',
              },
            }}
          >
            GitHub
          </a>
        </div>
        <div
          style={{
            width: '33.33%',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <i
            className="fab fa-facebook-f"
            style={{
              fontSize: '36px',
              color: '#666',
              marginBottom: '10px',
            }}
          />
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#337ab7',
              '&:hover': {
                color: '#23527c',
              },
            }}
          >
            Facebook
          </a>
        </div>
        <div
          style={{
            width: '33.33%',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <i
            className="fab fa-instagram"
            style={{
              fontSize: '36px',
              color: '#666',
              marginBottom: '10px',
            }}
          />
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#337ab7',
              '&:hover': {
                color: '#23527c',
              },
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
