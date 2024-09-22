import React, { useState } from 'react';

const Feedback = ({ content, name, title, img, apps }) => {
  // State to toggle card expansion
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state when the card is clicked
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className='feedback-card flex-col px-10 py-12  hover:scale-105 transition-transform duration-300 cursor-pointer'
      onClick={handleToggle}
    >
      <div className='flex flex-col justify-center items-center'>
        <img
          src={img}
          alt={name}
          className='w-[200px] h-[200px]'
        />
        <div className='flex flex-col justify-center items-center my-10'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
