import React, { useState, useEffect } from 'react';
import { CarouselItem } from './SliderItem';
import { StyledCenter } from './Slider.styles';
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
      <div className='carousel'>
        <div
          className='inner'
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {images.map((item) => {
            return <CarouselItem item={item} width={'100%'} />;
          })}
        </div>

        <div className='carousel-buttons'>
          <button
            className='button-arrow'
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span class='material-symbols-outlined'>arrow_back_ios</span>{' '}
          </button>
          <div className='indicators'>
            {images.map((item, index) => {
              return (
                <button
                  className='indicator-buttons'
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? 'indicator-symbol-active'
                        : 'indicator-symbol'
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className='button-arrow'
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span class='material-symbols-outlined'>arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </StyledCenter>
  );
};

export default Slider;
