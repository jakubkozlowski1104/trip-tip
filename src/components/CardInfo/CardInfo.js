import { CardIndoWrapper } from './CardInfo.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CardInfo = ({ destination }) => {
  const mapLink = destination.map_link;
  const [categories, setCategories] = useState([]);

  const navigateToMaps = () => {
    console.log(destination);
    window.open(mapLink, '_blank');
  };

  useEffect(() => {
    console.log(destination.destination_id);
    const fetchCategories = (destinationId) => {
      axios
        .post('http://localhost/TripTipApi/backend/getCategories.php', {
          destinationId,
        })
        .then((response) => {
          console.log(response);
          const categories = response.data;
          setCategories(categories);
          console.log('Kategorie dla destynacji:', categories);
        })
        .catch((error) => {
          console.error('Błąd pobierania kategorii:', error);
        });
    };

    fetchCategories(destination.destination_id);
  }, [destination.destination_id]);

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
