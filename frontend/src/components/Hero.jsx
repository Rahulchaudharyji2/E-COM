 // import React from 'react'
// import { assets } from '../assets/assets';

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//         <div className='text-[#414141]'>
//           <div className='flex items-center gap-2'>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//           </div>
//           <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Latest Arrivals</h1>
//           <div className='flex items-center gap-2'>
//             <p className='font-semibold text-sm md:text-base '> SHOP NOW</p>
//             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//           </div>
//         </div>
//       </div>
//       {/* hero image right  */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero


 // hero.jsx
 // hero.jsx
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; // Import assets

const StationarySection = ({ imageSrc, title, description }) => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})`, height: '400px' }} // Reduced height
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white prata-regular">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-6">{description}</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded text-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowData = [
    {
      imageSrc: assets.hero_img1, // Use the image from assets
      title: 'Sweeten your stationary collection',
      description: '& Creative minds...',
    },
    {
      imageSrc: assets.hero_img2,
      title: 'Organize your workspace',
      description: 'With our latest collection',
    },
    {
      imageSrc: assets.hero_img3,
      title: 'Unleash your creativity',
      description: 'New art supplies arrived',
    },
    // ... more slides
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const current = slideshowData[currentSlide];

  return (
    <div className="relative">
      <StationarySection {...current} />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slideshowData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer border-2 ${index === currentSlide ? 'bg-blue-800 border-blue-800' : 'bg-transparent border-blue-800'}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;