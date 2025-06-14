import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-kr-chaudhary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/Niraj12chaudhary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
