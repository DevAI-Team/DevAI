import React, { useState } from 'react';
import { discount } from '../assets';
import styles from '../style';
import '../ServicesCard.css'; // Create a CSS file for custom animations

const ServicesCard = ({ content, name, title, img, apps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expansion
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`flip-card`} // Main container for the flip card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flip-card-inner ${isExpanded ? 'flipped' : ''}`}>
        {/* Front side */}
        <div className='flip-card-front'>
          <div className='flex flex-col justify-center items-center'>
            <img src={img} alt={name} className='w-[200px] h-[200px]' />
            <div className='flex flex-col justify-center items-center my-10'>
              <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
                {name}
              </h4>

            </div>
          </div>
        </div>

        {/* Back side */}
        <div className='flip-card-back'>
          <div className='grid grid-flow-col grid-rows-3 expanded-content'>
            <div className='flex flex-row items-center rounded-[10px] mb-2'>
              <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
              <p className={`${styles.paragraph} ml-2`}>
                <span className='text-white'>Our</span> {name}{" "}
              </p>
            </div>

            {apps.map((app, index) => (
              <div
                key={index}
                className='flex items-center w-full p-2 m-2 bg-white rounded-md cursor-pointer'
                onClick={() => window.open(app.link, '_blank')}
              >
                <img
                  src={app.image}
                  alt={app.name}
                  className='w-[50px] h-[50px] rounded-md mr-3'
                />
                <a
                  href={app.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-black text-[16px] font-semibold'
                >
                  {app.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
