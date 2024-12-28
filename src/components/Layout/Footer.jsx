import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold">Local Store</h2>
          <p className="text-sm text-gray-400">© 2024 Local Store. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/about" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
