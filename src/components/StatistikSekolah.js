import React from 'react';
import { useSpring, animated } from 'react-spring';

const StatistikSekolah = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="bg-white p-6 rounded-md shadow-md" style={{ ...fadeIn, fontFamily: 'Poppins, sans-serif' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Statistik Item 1 */}
        <div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-md">
          <div className="text-3xl font-bold">125</div>
          <div className="ml-2">Siswa</div>
        </div>

        {/* Statistik Item 2 */}
        <div className="flex items-center justify-center p-4 bg-green-500 text-white rounded-md">
          <div className="text-3xl font-bold">25</div>
          <div className="ml-2">Tenaga Pendidik</div>
        </div>

        {/* Statistik Item 3 */}
        <div className="flex items-center justify-center p-4 bg-yellow-500 text-white rounded-md">
          <div className="text-3xl font-bold">5</div>
          <div className="ml-2">Ekstrakurikuler</div>
        </div>
        <div className="flex items-center justify-center p-4 bg-red-500 text-white rounded-md">
          <div className="text-3xl font-bold">A</div>
          <div className="ml-2">Akreditasi</div>
        </div>
      </div>
    </animated.div>
  );
};

export default StatistikSekolah;
