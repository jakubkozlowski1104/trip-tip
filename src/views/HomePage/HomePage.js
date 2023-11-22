import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomeWrapper } from './HomePage.styles';
import card1 from '../../assets/images/cards/card1.jpg';
import flagArm from '../../assets/images/flags/armenia.jpg';
import flagPhi from '../../assets/images/flags/philippines.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await axios.get(
          'http://localhost/TripTipApi/destinations/'
        );
        console.log(response);
        console.log(response.data);

        if (response.data && response.data.length > 0) {
          setDestinations(response.data);
        } 
        console.log(destinations);
      } catch (error) {
        // Obsługa błędu żądania
        console.error('Error fetching data:', error);
      }
    };

    getDestinations();
  }, []);

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
              <img src={card1} alt='' />
              <div className='cover-img'></div>
              <div className='country'>
                <p>Armenia</p>
                <div className='hover-text'></div>
              </div>
            </div>
            <div className='button read-more'>Read More!</div>
            <div className='flag'>
              <img src={flagArm} alt='' />
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
          <div className='card'>
            <div className='img'>
              <img src='' alt='' />
            </div>
            <div className='country'>Armenia</div>
            <div className='flag'>
              <img src={flagPhi} alt='' />
            </div>
            <div className='title'>The Symbol of Armenia - Ararat</div>
            <div className='description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
              sequi hic repudiandae quos aspernatur eveniet a corporis officiis
              id fuga.
            </div>
            <div className='info'>
              <div className='date'>November 02, 2023</div>
              <div className='share'>
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
              <div className='saved'>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className='likes'>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='img'>
              <img src='' alt='' />
            </div>
            <div className='country'>Armenia</div>
            <div className='flag'>FLAG</div>
            <div className='title'>The Symbol of Armenia - Ararat</div>
            <div className='description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
              sequi hic repudiandae quos aspernatur eveniet a corporis officiis
              id fuga.
            </div>
            <div className='info'>
              <div className='date'>November 02, 2023</div>
              <div className='share'>
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
              <div className='saved'>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className='likes'>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        </div>
      </StyledHomeWrapper>
    </>
  );
};

export default HomePage;
