import React from "react";
import posterImage from "../images/ppdb.jpg";
import { useTheme } from "../context/ThemeContext";

const WelcomeSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`welcome-section flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16 p-4 md:p-0 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="greeting max-w-md md:max-w-lg md:mr-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-blue-500 font-poppins">
          Sambutan Kepala Sekolah
        </h2>
        <p className="font-poppins leading-6 mb-2 md:mb-4">
          Assalamu'alaikum Warahmatullahi Wabarakatuh,
        </p>
        <p className="font-poppins leading-6 mb-2 md:mb-4">
          Selamat datang di Madrasah Ibtidaiyah Muslimin 5 Banyutengah. Kami
          merasa sangat bahagia dapat menyambut para siswa baru dan keluarga
          yang telah memilih MIM 5 sebagai lembaga pendidikan untuk anak-anak
          tercinta.
        </p>
        <p className="font-poppins leading-6 mt-2 md:mt-4">
          Saya, Nur Laila Habibah, selaku Kepala Sekolah, bersama dengan seluruh
          tenaga pendidik dan staff, berkomitmen untuk memberikan pendidikan
          terbaik dengan nilai-nilai Islami. Kami akan bersama-sama membentuk
          karakter dan kepribadian yang kuat, serta membantu peserta didik dalam
          pengembangan potensi akademis, spiritual, dan sosialnya.
        </p>
        <p className="font-poppins leading-6 mt-2 md:mt-4">
          Mari bergandengan tangan, berkolaborasi dalam lingkungan pendidikan
          yang Islami, sekaligus menjadi bagian dari keluarga besar MIM 5
          Banyutengah. Bersama, kita akan menjalani perjalanan pendidikan yang
          penuh keberkahan dan prestasi.
        </p>
        <p className="font-poppins leading-6 mt-2 md:mt-4">
          Terima kasih atas kepercayaan Anda memilih MIM 5 Banyutengah sebagai
          mitra dalam membentuk masa depan gemilang anak-anak kita. Semoga Allah
          SWT senantiasa memberikan keberkahan dan kesuksesan bagi kita semua.
        </p>
        <p className="font-poppins leading-6 mt-2 md:mt-4">
          Aamiin... Wassalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>
      </div>

      <div className="poster max-w-md md:max-w-lg md:w-1/3 overflow-hidden rounded-md">
        <img
          src={posterImage}
          alt="PPDB Poster"
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
