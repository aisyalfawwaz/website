import React, { useEffect, useState } from "react";
import { getTopHeadlines } from "../services/newsApiService";
import ArticleCard from "../components/ArticleCard";
import Banner from "../components/Banner";
import VisiMisi from "../components/VisiMisi";
import WelcomeSection from "../components/WelcomeSection";
import StatistikSekolah from "../components/StatistikSekolah";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const Beranda = () => {
  const [articles, setArticles] = useState([]);
  const { isDarkMode } = useTheme(); // Access the isDarkMode state from ThemeContext

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const data = await getTopHeadlines();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching top headlines:", error);
      }
    };

    fetchTopHeadlines();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6283850548293";
    const message = "Hello, I'm interested in your school!";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-10 px-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      } relative`}
    >
      {/* WhatsApp Floating Icon */}
      <button
        className={`fixed bottom-8 right-8 p-4 ${
          isDarkMode ? "bg-green-500" : "bg-blue-500"
        } text-white rounded-full hover:bg-green-600 transition-all duration-300`}
        onClick={handleWhatsAppClick}
        style={{ zIndex: 9999 }}
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Banner Section */}
      <Banner />

      {/* Card Section below */}
      <div className="my-4 mx-auto px-4 max-w-7xl relative w-4/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      {/* Content on the left */}
      <div className="max-w-8xl mx-4">
        {/* Other content for your Beranda section */}
        <VisiMisi />
        <WelcomeSection />
        {/* Include the FacebookStatus component */}
        {/* <FacebookStatus /> */}
        <StatistikSekolah />
      </div>
    </div>
  );
};

export default Beranda;