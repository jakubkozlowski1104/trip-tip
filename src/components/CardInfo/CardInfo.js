import { CardIndoWrapper } from './CardInfo.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faHeart,
  faPlus,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CardInfo = ({ destination }) => {
  const [categories, setCategories] = useState([]);
  const [review, setReview] = useState([]);
  const [reviewStars, setReviewStars] = useState(2);

  const navigateToMaps = () => {
    window.open(destination.map_link, '_blank');
  };

  const renderRate = () => {
    const dots = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= reviewStars) {
        dots.push(<div key={i} className='dot fill'></div>);
      } else {
        dots.push(<div key={i} className='dot'></div>);
      }
    }

    return dots;
  };

  useEffect(() => {
    if (review.length > 0) {
      setReviewStars(review[0].review_type);
    }
  }, [review]);

  useEffect(() => {
    console.log(destination.destination_id);
    const getReview = (destinationId) => {
      axios
        .post('http://localhost/TripTipApi/backend/getOneReview.php', {
          destinationId,
        })
        .then((response) => {
          setReview(response.data.review);
        })
        .catch((error) => {
          console.error('Błąd pobierania kategorii:', error);
        });
    };

    getReview(destination.destination_id);
  }, [destination.destination_id]);

  useEffect(() => {
    console.log(destination.destination_id);
    const fetchCategories = (destinationId) => {
      axios
        .post('http://localhost/TripTipApi/backend/getCategories.php', {
          destinationId,
        })
        .then((response) => {
          setCategories(response.data.categories);
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
        <div className='likes-saves-section'>
          <div className='saves sav-lik'>
            <div className='title'>Saves:</div>
            <div className='info'>
              <i>
                <FontAwesomeIcon icon={faBookmark} />
              </i>
              <div className='amout'>{destination.saves}</div>
            </div>
          </div>

          <div className='likes sav-lik'>
            <div className='title'>Likes:</div>
            <div className='info'>
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
              <div className='amout'>{destination.likes}</div>
            </div>
          </div>
        </div>
        <div className='categories'>
          <div className='title'>Categories:</div>
          <ul className='titles'>
            {categories ? (
              categories.map((category, index) => (
                <div className='single-title'>
                  <i>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                  <li key={index}>{category.name}</li>
                </div>
              ))
            ) : (
              <li>No categories</li>
            )}
          </ul>
        </div>
        <div className='description'>
          <div className='title'>Short description</div>
          <p>{destination.description}</p>
        </div>
        <div className='review'>
          <div className='title'>Newest rewiev</div>
          <div className='header-review'>
            <div className='user-name'>
              <p>
                {review[0] ? (
                  <p>{review[0].user_name}</p>
                ) : (
                  <p>No reviews for this destination</p>
                )}
              </p>
              <div className='rating'>{renderRate()}</div>
            </div>
          </div>
          <div className='content'>
            {review.length > 0 && review[0].review_content ? (
              <p>{review[0].review_content}</p>
            ) : (
              <p>No reviews for this destination</p>
            )}
          </div>
        </div>
        <button className='btn read-more'>Read more</button>
      </div>
    </CardIndoWrapper>
  );
};

export default CardInfo;
