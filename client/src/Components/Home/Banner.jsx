import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between px-4 md:px-14 py-2 font-medium text-sm text-white bg-gray-600">
        <p>Craft the perfect resume in seconds with AI.</p>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => window.open('https://akash-raj-portfolio.vercel.app/', '_blank')}
            className="font-normal text-gray-800 bg-white px-7 py-2 rounded-full transition transform hover:bg-blue-200 hover:scale-105"
          >
            Meet the Mind Behind Skillify
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;

