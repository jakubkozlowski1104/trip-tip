import React, { useState, useEffect } from 'react';
import { CarouselItem } from '../../Atoms/SliderItem/SliderItem';
import { StyledCenter } from './Slider.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const fetchPexelsPhotos = async () => {
    const PEXELS_API_KEY =
      'U1xaJzxEdI3UoLLPQdR49iQfkDp980LzgSoWIq55uhIgnaPlWKK305Rg';
    const searchQuery = 'bali';

    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=20`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );
      const horizontalImages = response.data.photos.filter(
        (photo) => photo.width > photo.height
      );
      setImages(horizontalImages);
    } catch (error) {
      console.error('Błąd pobierania zdjęć:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
    }, 3000);

    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, images]);

  useEffect(() => {
    fetchPexelsPhotos();
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, images]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
      clearInterval(intervalId);
    }

    setActiveIndex(newIndex);
  };

  return (
    <StyledCenter>
      <div className='content-container'>
        <div
          className='slider'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {images.map((item) => {
            return <CarouselItem item={item} width={'100%'} />;
          })}
        </div>

        <div className='carousel-buttons'>
          <div
            className='arrow left'
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <i>
              <FontAwesomeIcon icon={faLeftLong} />
            </i>
          </div>
          <div
            className='arrow right'
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <i>
              <FontAwesomeIcon icon={faRightLong} />
            </i>
          </div>

          <div className='dots'>
            {images.map((item, index) => {
              return (
                <button
                  className='dot'
                  onClick={() => {
                    updateIndex(index);
                  }}
                  style={{
                    backgroundColor:
                      index === activeIndex ? '#f55153' : '#b9c1c0',
                  }}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </StyledCenter>
  );
};

export default Slider;
