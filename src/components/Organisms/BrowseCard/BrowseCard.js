import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCenter } from '../BrowseCard/BrowseCard.styles';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import Slider from '../../Molecules/Slider/Slider';
import Message from '../../Atoms/Message/Message';
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

const BrowseCard = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [selectedDot, setSelectedDot] = useState(1);
  const [destId, setDestId] = useState(0);
  const [content, setContent] = useState('');
  const location = useLocation();
  const destination = location.state?.destination;

  const getUserIdFromToken = () => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      return decodedToken.user_id;
    }
    return null;
  };

  const showMessage = (message) => {
    setContent(message);
    setIsMessageOpen(true);
  };

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/addReview.php',
        {
          userId: getUserIdFromToken(),
          content: content,
          reviewType: selectedDot,
          destId: destId,
        }
      );

      console.log(response.data.status);
      if (response.data.status === 1) {
        showMessage();
      }
    } catch (error) {
      console.error('Błąd podczas wysyłania danych:', error);
    }
  };

  const getReviews = (destinationId) => {
    setDestId(destinationId);
    axios
      .post('http://localhost/TripTipApi/backend/getOneReview.php', {
        destinationId,
      })
      .then((response) => {
        setReviews(response.data.review);
      })
      .catch((error) => {
        console.error('Błąd pobierania kategorii:', error);
      });
  };

  const renderRate = (idx) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= reviews[idx].review_type) {
        dots.push(<div key={i} className='dot fill'></div>);
      } else {
        dots.push(<div key={i} className='dot'></div>);
      }
    }
    return dots;
  };

  useEffect(() => {
    getReviews(destination.destination_id);
    console.log(destination);
  }, []);

  return (
    <StyledCenter>
      <div className='content-container'>
        <Slider />
        <div className='read-section'>
          <div className='description'>
            <div className='title'>Desctiption</div>
            <div className='content'>{LOREM_CONTENT}</div>
          </div>
          <div className='reviews'>
            <div className='title'>Reviews</div>
            {reviews ? (
              reviews.map((review, idx) => (
                <div className='review' key={idx}>
                  <div className='header-review'>
                    <div className='user-name'>
                      <p>
                        {review ? (
                          <p>{review.user_name}</p>
                        ) : (
                          <p>No reviews for this destination</p>
                        )}
                      </p>
                      <div className='rating'>{renderRate(idx)}</div>
                    </div>
                  </div>
                  <div className='content'>
                    {review.review_content ? (
                      <p>{review.review_content}</p>
                    ) : (
                      <p>No review for this destination</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>brak</p>
            )}
            <button className='btn new-review' onClick={openModal}>
              Dodaj opinię
            </button>
            {isModalOpen && (
              <div className='modal-overlay'>
                <div className='modal-container'>
                  <div className='review-type'>
                    <p>Choose an review rate</p>
                    <div className='dots'>
                      {[1, 2, 3, 4, 5].map((dotIndex) => (
                        <div
                          key={dotIndex}
                          className={
                            dotIndex <= selectedDot ? 'dot fill' : 'dot'
                          }
                          onClick={() => handleDotClick(dotIndex)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <textarea
                    className='textarea'
                    placeholder='Wpisz swoją opinię...'
                    rows={8}
                    cols={50}
                    onChange={handleContentChange}
                  />
                  <div className='buttons'>
                    <button
                      className='btn close-btn'
                      onClick={(e) => {
                        closeModal();
                        handleAddReview(e);
                      }}
                    >
                      Add
                    </button>
                    <button
                      className='btn close-btn'
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isMessageOpen && (
          <Message content={content} onClose={() => setIsMessageOpen(false)} />
        )}
      </div>
    </StyledCenter>
  );
};

export default BrowseCard;
