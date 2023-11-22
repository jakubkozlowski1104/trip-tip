import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomeWrapper } from './HomePage.styles';
import flagArm from '../../assets/images/flags/armenia.jpg';
import flagPhi from '../../assets/images/flags/philippines.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import img from '../../assets/images/cards/garni.jpg';

const IMG_URL = '../../assets';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await axios.get(
          'http://localhost/TripTipApi/destinations/'
        );
        if (response.data && response.data.length > 0) {
          setDestinations(response.data);
        }
      } catch (error) {
        // Obsługa błędu żądania
        console.error('Error fetching data:', error);
      }
    };

    getDestinations();
    console.log(destinations);
  }, []);

  const showDestinations = () => {
    console.log(destinations);
  };

  return (
    <>
      <GlobalStyle />
      <StyledHomeWrapper>
        <div className='headers'>
          <div className='category'>Discover destinations</div>
          <div className='sort-by'>Past 24 hours</div>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='img'>
              <img src={img} alt='' />
              <div className='cover-img'></div>
              <div className='country'>
                <p>Armenia</p>
                <div className='hover-text'></div>
              </div>
            </div>
            <div className='button read-more' onClick={showDestinations}>
              Read More!
            </div>
            <div className='flag'>
              <img src='' alt='' />
            </div>
            <div className='down-section'>
              <div className='title'>
                <h2>Oldest country in the world?</h2>
              </div>
              <div className='description'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, sequi hic repudiandae quos aspernatur eveniet a
                  corporis officiis...
                </p>
              </div>
              <div className='info'>
                <div className='date'>
                  <p>November 02, 2023</p>
                </div>
                <div className='icons'>
                  <div className='icon share'>
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
                  <div className='icon saved'>
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                  <div className='icon likes'>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {destinations.map(
            ({ title, description, publish_date, id, image_path }, idx) => (
              <div key={id} className='card'>
                <div className='img'>
                  <img src={image_path} alt='' />
                  <div className='cover-img'></div>
                  <div className='country'>
                    <p>Armenia</p>
                    <div className='hover-text'></div>
                  </div>
                </div>
                <div className='button read-more'>Read More!</div>
                <div className='flag'>
                  <img src={image_path} alt='' />
                </div>
                <div className='down-section'>
                  <div className='title'>
                    <h2>{title}</h2>
                  </div>
                  <div className='description'>
                    <p>{description}</p>
                  </div>
                  <div className='info'>
                    <div className='date'>
                      <p>{publish_date}</p>
                    </div>
                    <div className='icons'>
                      <div className='icon share'>
                        <FontAwesomeIcon icon={faShareAlt} />
                      </div>
                      <div className='icon saved'>
                        <FontAwesomeIcon icon={faBookmark} />
                      </div>
                      <div className='icon likes'>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </StyledHomeWrapper>
    </>
  );
};

export default HomePage;
