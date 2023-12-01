// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { StyledCenter } from '../BrowseCard/BrowseCard.styles';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const YOUR_ACCESS_KEY = 'DMQfY4g6AfILvkA0_KpbvGdd_AKGCDEtTF6RCx6KsTk';

// const YourComponent = () => {
//   const [images, setImages] = useState([]);
//   const location = useLocation();
//   const { destination } = location.state || {};

//   const fetchImages = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.unsplash.com/photos/random?count=5&client_id=${YOUR_ACCESS_KEY}`
//       );
//       setImages(response.data);
//     } catch (error) {
//       console.error('Błąd pobierania zdjęć:', error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     accessibility: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <StyledCenter>
//       <h1>Zdjęcia z Unsplash</h1>
//       <h2>{destination.title}</h2>
//       <Slider {...settings}>
//         {images.map((image) => (
//           <div key={image.id}>
//             <img src={image.urls.small} alt={image.alt_description} />
//           </div>
//         ))}
//       </Slider>
//     </StyledCenter>
//   );
// };

// export default YourComponent;
