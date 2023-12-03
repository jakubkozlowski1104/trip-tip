import React from 'react';

export const CarouselItem = ({ item, width }) => {
  return (
    <div className='carousel-item' style={{ width: width }}>
      {console.log(item)}
      <img className='carousel-img' src={item.src.large} alt='siema' />
    </div>
  );
};
