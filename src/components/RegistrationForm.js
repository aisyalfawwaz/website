import React, { useState } from "react";
import "../styles/main.css"; // Adjust the path based on your project structure

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    parentName: "",
    address: "",
    whatsappNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  
    // Construct the WhatsApp message
    const whatsappMessage = `Halo, saya ${formData.parentName}, orang tua dari Ananda ${formData.fullName}. Saya ingin mendaftarkan Ananda sebagai calon peserta didik di Mim 5 Banyutengah. Alamat kami di ${formData.address}.`;
  
    // Construct the WhatsApp API link
    const whatsappApiLink = `https://api.whatsapp.com/send?phone=6283850548293&text=${encodeURIComponent(whatsappMessage)}`;
  
    // Redirect to the WhatsApp API link
    window.location.href = whatsappApiLink;
  };
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="max-w-md w-full p-8 bg-white rounded-md shadow-md"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-500 text-center">
          Formulir Pendaftaran
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Lengkap Calon Siswa
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="parentName"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Orang Tua
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Alamat
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="whatsappNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Nomor WhatsApp
            </label>
            <input
              type="text"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full px-4 py-2 w-full hover:bg-blue-600 transition-all duration-300"
            style={{ backgroundColor: "#3490dc", cursor: "pointer" }}
            onMouseOver={() => {
              document.getElementsByClassName(
                "hover:bg-blue-600"
              )[0].style.backgroundColor = "#2779bd";
            }}
            onMouseOut={() => {
              document.getElementsByClassName(
                "hover:bg-blue-600"
              )[0].style.backgroundColor = "#3490dc";
            }}
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
