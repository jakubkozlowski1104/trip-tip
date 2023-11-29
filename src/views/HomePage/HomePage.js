import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomeWrapper } from './HomePage.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import SearchBar from '../../components/Atoms/SearchBar';
import CardInfo from '../../components/CardInfo/CardInfo';
import { jwtDecode } from 'jwt-decode';

const HomePage = ({ setIsScrolled, showSearchbar, setShowSearchbar }) => {
  const [destinations, setDestinations] = useState([]);
  const [activeDestination, setActiveDestination] = useState();
  const [isActive, setIsActive] = useState(false);
  const [userSaves, setUserSaves] = useState([3, 5, 9]);
  const [isSaved, setIsSaved] = useState(false);

  const checkIsDestinationSaved = (destination_id) => {
    const isNumberIncluded = userSaves.includes(destination_id);
  };

  useEffect(() => {
    const homeWrapper = document.querySelector('.card-container-scroll');
    const handleScroll = () => {
      const offset = homeWrapper.scrollTop;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (offset > 110) {
        setShowSearchbar(true);
      } else {
        setShowSearchbar(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await axios.get(
          'http://localhost/TripTipApi/backend/getDestinations.php/destinations/'
        );
        if (response.data && response.data.length > 0) {
          setDestinations(response.data);
          response.data.forEach((destination) => {
            checkIsDestinationSaved(destination.destination_id);
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDestinations();
  }, []);

  useEffect(() => {
    const fetchUserSaves = () => {
      const userToken = localStorage.getItem('token');
      if (userToken) {
        const decodedToken = jwtDecode(userToken);
        const userId = decodedToken.user_id;
        console.log(userId);
        axios
          .post('http://localhost/TripTipApi/backend/getSaved.php', {
            userId,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Błąd pobierania kategorii użytkownika:', error);
          });
      }
    };

    fetchUserSaves();
  }, []);

  return (
    <>
      <GlobalStyle />
      {isActive && <CardInfo destination={activeDestination} />}
      <StyledHomeWrapper>
        <div className='card-container-scroll'>
          <div className='headers'>
            <div className='category'>Discover destinations</div>
            <div className='search-bar'>{!showSearchbar && <SearchBar />}</div>
            <div className='sort-by'>Past 24 hours</div>
          </div>
          <div className='cards'>
            {destinations.map(
              (
                {
                  destination_id,
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
                  <div
                    className='img'
                    onClick={() => {
                      setActiveDestination(destinations[idx]);
                      setIsActive(true);
                    }}
                  >
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
