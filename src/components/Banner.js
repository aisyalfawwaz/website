import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ padding }) => {
  const bannerStyle = {
    backgroundImage: 'url("https://awsimages.detik.net.id/community/media/visual/2022/06/21/ilustrasi-sekolah.jpeg?w=1200")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const gradientStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
    opacity: 0.4,
  };

  const textStyle = {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
  };

  return (
    <div className={`mb-8 mx-auto max-w-7xl relative w-full h-72 md:h-96 lg:h-96 xl:h-96 overflow-hidden rounded-md shadow-lg`}>
      <div className="h-full relative" style={bannerStyle}>
        <div style={gradientStyle}></div>
        <div className={`h-full relative p-8 pt-${padding} flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300`} style={textStyle}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Madrasah Berakhlak
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white opacity-80 mb-6">
            Berlandaskan Quran dan Hadits, Madrasah Berakhlak Karimah merupakan sekolah yang berkualitas dan berprestasi
          </p>
          <Link
            to="/registration"
            className="mt-4 md:mt-6 px-8 py-2 bg-white text-blue-500 font-normal rounded-full hover:bg-blue-100 transition-all duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
