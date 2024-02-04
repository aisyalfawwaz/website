import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import '../styles/main.css';

const ArticleCard = ({ article }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  const fontStyles = {
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <div className={`rounded-xl overflow-hidden shadow-md bg-white ${isClicked ? 'clicked' : ''}`} onClick={handleCardClick}>
      {article ? (
        <div className="card">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-md"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg font-normal mb-2 text-gray-800 overflow-hidden overflow-ellipsis h-14 font-poppins" style={fontStyles}>
              {article.title}
            </h3>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 font-poppins" style={fontStyles}
              >
                {isClicked ? 'Baca Lebih Sedikit' : 'Baca Selengkapnya'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton height={248} />
      )}
    </div>
  );
};

export default ArticleCard;
