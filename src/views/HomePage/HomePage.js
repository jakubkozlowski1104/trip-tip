import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomeWrapper } from './HomePage.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';

const HomePage = ({ setIsScrolled }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const homeWrapper = document.querySelector('.card-container-scroll');
    const handleScroll = () => {
      const offset = homeWrapper.scrollTop;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (homeWrapper) {
      homeWrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (homeWrapper) {
        homeWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
        console.error('Error fetching data:', error);
      }
    };

    getDestinations();
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledHomeWrapper>
        <div className='card-container-scroll'>
          <div className='headers'>
            <div className='category'>Discover destinations</div>
            <div className='sort-by'>Past 24 hours</div>
          </div>
          <div className='cards'>
            {destinations.map(
              (
                {
                  title,
                  description,
                  publish_date,
                  destination_image_path,
                  flag_path,
                  country_name,
                },
                idx
              ) => (
                <div key={idx} className='card'>
                  <div className='img'>
                    <img src={destination_image_path} alt='' />
                    <div className='cover-img'></div>
                    <div className='country'>
                      <p>{country_name}</p>
                      <div className='hover-text'></div>
                    </div>
                  </div>
                  <button className='button read-more'>Read More!</button>
                  <div className='flag'>
                    <img src={flag_path} alt='' />
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
        </div>
      </StyledHomeWrapper>
    </>
  );
};

export default HomePage;
