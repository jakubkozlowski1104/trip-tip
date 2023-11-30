/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledHomeWrapper } from './HomePage.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark as solidBookmark,
  faHeart as solidHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark as regularBookmark,
  faHeart as regularHeart,
} from '@fortawesome/free-regular-svg-icons';

import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import SearchBar from '../../components/Atoms/SearchBar';
import CardInfo from '../../components/CardInfo/CardInfo';
import { jwtDecode } from 'jwt-decode';

const HomePage = ({
  setIsScrolled,
  showSearchbar,
  setShowSearchbar,
  activeCategory,
}) => {
  const [destinations, setDestinations] = useState([]);
  const [activeDestination, setActiveDestination] = useState();
  const [isActive, setIsActive] = useState(false);
  const [userSaves, setUserSaves] = useState([0]);
  const [userLikes, setUserLikes] = useState([0]);

  const getUserIdFromToken = () => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      return decodedToken.user_id;
    }
    return null;
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
  }, []);

  // const getDestinations = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost/TripTipApi/backend/getDestinations.php/destinations/'
  //     );
  //     if (response.data && response.data.length > 0) {
  //       setDestinations(response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await axios.post(
          'http://localhost/TripTipApi/backend/getDestByCategories.php',
          {
            category: activeCategory,
          }
        );
        console.log('API Response:', response.data);
        if (response.data && response.data.length > 0) {
          setDestinations(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDestinations();
  }, [activeCategory]);

  const fetchUserSaves = () => {
    const userId = getUserIdFromToken();
    axios
      .post('http://localhost/TripTipApi/backend/getSaved.php', {
        userId,
      })
      .then((response) => {
        setUserSaves(response.data.destinations);
      })
      .catch((error) => {
        console.error('Błąd pobierania kategorii użytkownika:', error);
      });
  };

  const fetchUserLikes = () => {
    const userId = getUserIdFromToken();
    axios
      .post('http://localhost/TripTipApi/backend/getLiked.php', {
        userId,
      })
      .then((response) => {
        setUserLikes(response.data.destinations);
      })
      .catch((error) => {
        console.error('Błąd pobierania kategorii użytkownika:', error);
      });
  };

  const handleSaved = (
    destination_id,
    isSaved,
    userId = getUserIdFromToken()
  ) => {
    console.log(userId, destination_id, isSaved);
    axios
      .post('http://localhost/TripTipApi/backend/savesInsertOrDelete.php', {
        userId: userId,
        destinationId: destination_id,
        isSaved: isSaved,
      })
      .then((response) => {
        console.log(response.data);
        fetchUserSaves();
      })
      .catch((error) => {
        console.error('Błąd zapytania:', error);
      });
  };

  const handleLiked = (
    destination_id,
    isLiked,
    userId = getUserIdFromToken()
  ) => {
    console.log(userId, destination_id, isLiked);
    axios
      .post('http://localhost/TripTipApi/backend/likesInsertOrDelete.php', {
        userId: userId,
        destinationId: destination_id,
        isLiked: isLiked,
      })
      .then((response) => {
        console.log(response.data);
        fetchUserLikes();
      })
      .catch((error) => {
        console.error('Błąd zapytania:', error);
      });
  };

  useEffect(() => {
    // getDestinations();
    fetchUserSaves();
    fetchUserLikes();
  }, []);

  return (
    <>
      <GlobalStyle />
      {isActive && (
        <CardInfo
          destination={activeDestination}
          userSaves={userSaves}
          userLikes={userLikes}
        />
      )}
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
                        {userSaves?.length > 0 &&
                        userSaves.includes(destination_id) ? (
                          <div
                            className='icon saved fill'
                            onClick={() => handleSaved(destination_id, true)}
                          >
                            <FontAwesomeIcon icon={solidBookmark} />
                          </div>
                        ) : (
                          <div
                            className='icon saved'
                            onClick={() => handleSaved(destination_id, false)}
                          >
                            <FontAwesomeIcon icon={regularBookmark} />
                          </div>
                        )}

                        {userLikes?.length > 0 &&
                        userLikes.includes(destination_id) ? (
                          <div
                            className='icon liked fill'
                            onClick={() => handleLiked(destination_id, true)}
                          >
                            <FontAwesomeIcon icon={solidHeart} />
                          </div>
                        ) : (
                          <div
                            className='icon liked'
                            onClick={() => handleLiked(destination_id, false)}
                          >
                            <FontAwesomeIcon icon={regularHeart} />
                          </div>
                        )}
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
