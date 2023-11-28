import React from 'react';
import { CardIndoWrapper } from './CardInfo.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const CardInfo = ({ destination }) => {
  const mapLink = destination.map_link;

  const navigateToMaps = () => {
    console.log(destination);
    window.open(mapLink, '_blank');
  };

  return (
    <CardIndoWrapper>
      <div className='padding-top'>
        <div className='name'>
          <p>{destination.title}</p>
        </div>
        <div className='img' onClick={() => navigateToMaps()}>
          <img src={destination.map_img} alt='map' />
          <div className='plus'>
            <div className='circle'>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
            </div>
          </div>
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
        <div className='categories'>
          <div className='name'>
            <p>Categories:</p>
          </div>
          <ul className='titles'>
            <li>{destination.category_name}</li>
          </ul>
        </div>
        <div className='description'>{destination.description}</div>
        <div className='review'>
          <div className='user-name'>{destination.user_name}</div>
          <div className='content'>{destination.review_content}</div>
        </div>
        <button className='btn read-more'>Read more</button>
      </div>
    </CardIndoWrapper>
  );
};

export default CardInfo;
