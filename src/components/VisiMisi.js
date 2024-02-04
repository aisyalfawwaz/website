import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

const VisiMisi = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [isCardClicked, setCardClicked] = useState(false);

  const cardClickAnimation = useSpring({
    transform: isCardClicked ? 'scale(1.05)' : 'scale(1)',
  });

  const handleCardClick = () => {
    setCardClicked(!isCardClicked);
  };

  return (
    <animated.div
      style={{ ...fadeIn, ...cardClickAnimation }}
      onClick={handleCardClick}
      className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto my-8 p-8 bg-white rounded-md shadow-md gap-8 cursor-pointer"
    >
      {/* Visi Sekolah */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-500 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Visi Sekolah
        </h2>
        <p className="text-xl text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Menjadi sekolah unggulan yang mencetak siswa-siswa berkualitas dan berprestasi di berbagai bidang.
        </p>
      </div>

      {/* Misi Sekolah */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-500 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Misi Sekolah
        </h2>
        <ul className="text-xl text-gray-800 list-disc list-inside ">
          <li className="flex items-center mb-4"  style={{ fontFamily: 'Poppins, sans-serif' }}> 
            <FontAwesomeIcon icon={faBullseye} className="text-blue-500 mr-4 " />
            Mengembangkan potensi siswa secara optimal.
          </li>
          <li className="flex items-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <FontAwesomeIcon icon={faTasks} className="text-blue-500 mr-4" />
            Menyelenggarakan pembelajaran berbasis teknologi.
          </li>
          <li className="flex items-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}  >
            <FontAwesomeIcon icon={faUsers} className="text-blue-500 mr-4" />
            Memberikan pendidikan karakter dan moral.
          </li>
          {/* Add more mission statements as needed */}
        </ul>
      </div>
    </animated.div>
  );
};

export default VisiMisi;
