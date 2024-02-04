import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-blue-500">MI Muhammadiyah 5 Banyutengah</h3>
          <p className="text-sm text-gray-300">
            Providing quality education with Islamic values
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Sekretariat: Jl Sumur kebo RT 008, Banyutengah, Gresik
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        <p>&copy; 2024 MI Muhammadiyah 5 Banyutengah. All Rights Reserved.</p>
        <p className="mt-2">Designed with ❤️ by Fawwaz</p>
      </div>
    </footer>
  );
};

export default Footer;
