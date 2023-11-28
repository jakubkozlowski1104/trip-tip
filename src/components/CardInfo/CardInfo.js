import React from 'react';
import { CardIndoWrapper } from './CardInfo.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';

const CardInfo = ({ destination }) => {
  return (
    <CardIndoWrapper>
      <div className='padding-top'>
        <div className='name'>
          <p>{destination.title}</p>
        </div>
        <div className='img'>
          <img src={destination.map_img} alt='' />
        </div>
        <div className='likes-saves'>
          <div className='saves'>
            <i>
              <FontAwesomeIcon icon={faBookmark} />
            </i>
            <div className='amout'>{destination.saves}</div>
          </div>
          <div className='likes'>
            <i>
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <div className='amout'>{destination.likes}</div>
          </div>
        </div>
        <div className='typed'>Categories: {destination.category_name}</div>
        <div className='description'>{destination.description}</div>
        <div className='review'>
          <div className='user-name'>{destination.user_name}</div>
          <div className='content'>{destination.review_content}</div>
        </div>
      </div>
    </CardIndoWrapper>
  );
};

export default CardInfo;
