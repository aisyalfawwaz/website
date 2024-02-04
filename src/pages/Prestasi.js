// PrestasiView.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import prestasiList from '../data/PrestasiData';

const PrestasiView = () => {
  // Menggunakan react-spring untuk animasi
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
<div className="container mx-auto px-4 pb-4 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prestasiList.map((prestasi, index) => (
          <animated.div
            key={index}
            style={{ ...fadeIn, fontFamily: 'Poppins, sans-serif' }}
            className="rounded-md overflow-hidden shadow-md bg-white transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={prestasi.gambar}
              alt={prestasi.judul}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gray-800 overflow-hidden overflow-ellipsis h-14">
                {prestasi.judul}
              </h3>
              <p className="text-gray-600">{prestasi.deskripsi}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default PrestasiView;
