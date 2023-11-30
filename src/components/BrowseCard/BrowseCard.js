import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { StyledCenter } from '../BrowseCard/BrowseCard.styles';

const YOUR_ACCESS_KEY = 'DMQfY4g6AfILvkA0_KpbvGdd_AKGCDEtTF6RCx6KsTk';

const YourComponent = () => {
  const [images, setImages] = useState([]);
  const location = useLocation();
  const { destination } = location.state || {};

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=5&client_id=${YOUR_ACCESS_KEY}`
        );
        setImages(response.data);
      } catch (error) {
        console.error('Błąd pobierania zdjęć:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <StyledCenter>
      <h1>Zdjęcia z Unsplash</h1>
      <h2>{destination.title}</h2>
      <div className='image-list'>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
      </div>
    </StyledCenter>
  );
};

export default YourComponent;
