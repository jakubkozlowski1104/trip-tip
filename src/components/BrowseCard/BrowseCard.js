import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCenter } from '../BrowseCard/BrowseCard.styles';

const LOREM_CONTENT = (
  <p>
    {' '}
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad molestias error
    a minima veritatis, accusantium harum! Asperiores vero sint provident ipsa,
    omnis minus! Dolorum repudiandae tempore alias quos exercitationem, officia
    beatae temporibus fugiat praesentium delectus, voluptatum doloremque
    suscipit itaque id molestias perspiciatis sequi quas, facere qui dolore
    reprehenderit quia! Corporis culpa praesentium, dolores excepturi pariatur
    accusamus tenetur molestiae eligendi eius esse eos. <br />
    <br /> nobis asperiores officiis quae laudantium iste accusantium, ea dolore
    repellat fugiat quis cupiditate maiores delectus? Atque molestias inventore
    voluptas omnis, obcaecati quisquam quidem impedit excepturi, dolorem ullam
    hic aliquam? Quisquam molestiae excepturi sunt pariatur a ipsum, at ratione
    nesciunt non maiores illum distinctio fugit ea aperiam ipsam modi omnis
    doloribus veniam autem mollitia dolor consectetur.
    <br />
    <br /> Inventore maiores earum, iste illum harum mollitia labore sed
    aspernatur modi consectetur quis doloremque debitis totam minima accusamus
    neque rem sint, similique expedita nisi ad qui! Incidunt quidem aperiam ex,
    delectus cumque repudiandae maxime. <br /> sapiente unde, vel laudantium
    temporibus neque dolorum! Ipsum ad architecto quia nemo recusandae
    consectetur, beatae numquam quidem, excepturi nulla voluptate minus ab et
    similique ipsa eum molestias a dolorem accusantium, quibusdam rerum. Ipsam
    odio hic, delectus voluptas quam reiciendis possimus atque iure ab aliquam
    debitis, porro dolorum animi nesciunt! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Aspernatur impedit sequi eius. Sit ipsum
    distinctio maiores, possimus adipisci nulla veniam fugit quis corporis ut
    error quia. Veniam dignissimos perspiciatis dolor consequuntur. Sint cumque
    dicta, illo exercitationem numquam deleniti culpa, totam dolorem assumenda,
    officia adipisci. <br />
    <br />
    Non ratione dicta pariatur unde. Non eum deleniti expedita a quisquam
    voluptates necessitatibus excepturi laborum quas cum accusamus rem,
    corporis, odio, placeat facilis sed cumque ut eos hic totam voluptas porro
    repellat! Mollitia perspiciatis nostrum vel aut vero quod facilis. Aperiam,
    doloremque corporis ab ratione tempore pariatur omnis facere saepe velit,
    iusto nam alias est obcaecati aliquam hic praesentium in quidem quod nulla
    numquam facilis eveniet asperiores. Exercitationem praesentium, fuga
    excepturi facere quam eaque ullam nobis? Nostrum pariatur et quia. Error
    natus rerum officiis saepe. Consectetur veritatis tempora, facilis sint
    eveniet ipsum expedita sit? Necessitatibus voluptatibus accusamus cum
    doloremque ea porro rerum! Nihil dolores beatae culpa.
  </p>
);

const PEXELS_API_KEY =
  'U1xaJzxEdI3UoLLPQdR49iQfkDp980LzgSoWIq55uhIgnaPlWKK305Rg';
const searchQuery = 'bali';

const BrowseCard = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [reviews, setReviews] = useState({
    user_name: 'kuba2115',
    review_type: 4,
    review_content: 'bardzo fajne miejsce!',
  });

  

  const fetchPexelsPhotos = async () => {
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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setIntervalId(newInterval);
  };

  const renderDots = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={index === currentIndex ? 'dot active' : 'dot'}
        onClick={() => handleDotClick(index)}
      ></div>
    ));
  };

  const renderRate = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= reviews.reviewStars) {
        dots.push(<div key={i} className='dot fill'></div>);
      } else {
        dots.push(<div key={i} className='dot'></div>);
      }
    }
    return dots;
  };

  useEffect(() => {
    fetchPexelsPhotos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <StyledCenter>
      <div className='content-container'>
        <div className='slider'>
          {images.map((image, index) => (
            <div key={image.id}>
              {index === currentIndex && (
                <img src={image.src.large} alt={`Slide ${index}`} />
              )}
            </div>
          ))}
          <div className='dots'>{renderDots()}</div>
        </div>
        <div className='read-section'>
          <div className='description'>
            <div className='title'>Desctiption</div>
            <div className='content'>{LOREM_CONTENT}</div>
          </div>
          <div className='reviews'>
            <div className='title'>Reviews</div>
            <div className='review'>
              <div className='header-review'>
                <div className='user-name'>
                  <p>
                    {reviews ? (
                      <p>{reviews.user_name}</p>
                    ) : (
                      <p>No reviews for this destination</p>
                    )}
                  </p>
                  <div className='rating'>{renderRate()}</div>
                </div>
              </div>
              <div className='content'>
                {reviews.review_content ? (
                  <p>{reviews.review_content}</p>
                ) : (
                  <p>No reviews for this destination</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCenter>
  );
};

export default BrowseCard;
