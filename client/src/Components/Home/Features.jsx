import React from 'react';

const Features = () => {
  return (
    <>
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      {/* Trusted Companies Section */}
      <div id="features" className="max-md:px-4 my-16 scroll-mt-20">
        {/* <p className="bg-gradient-to-r from-slate-800 to-[#4D6EA3] text-transparent bg-clip-text text-3xl text-center max-w-3xl font-semibold mx-auto">
          Trusted by world’s leading companies.
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-h-[450px] gap-6 mt-6">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-7.svg"
            alt="features showcase"
            className="hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-8.svg"
            alt="features showcase"
            className="hover:-translate-y-1 transition-all duration-300 max-md:w-full"
          />
        </div> */}
        <p className="bg-gradient-to-r from-slate-800 to-[#4D6EA3] text-transparent bg-clip-text text-3xl text-center max-w-3xl font-semibold mx-auto">
  Trusted by world’s leading companies.
</p>

<div className="flex flex-col-reverse md:flex-row items-center justify-center max-h-[450px] gap-6 mt-15">
  <img
    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-7.svg"
    alt="features showcase"
    className="hover:-translate-y-1 transition-all duration-300"
  />
  <img
    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-8.svg"
    alt="features showcase"
    className="hover:-translate-y-1 transition-all duration-300 max-md:w-full"
  />
</div>

      </div>
    </>
  );
};

export default Features;
