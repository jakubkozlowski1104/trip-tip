import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledWrapper } from './AdminReviews.styles';

const AdminReviews = () => {
  const [uncheckedReviews, setUncheckedReviews] = useState([]);

  const addDestinationReview = async (destinationId, reviewId) => {
    try {
      console.log('dest: ', destinationId, 'rev: ', reviewId);
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/addReviewToMergedTable.php',
        {
          destinationId: destinationId,
          reviewId: reviewId,
        }
      );

      if (response.data.status === 1) {
        console.log('Wpisy dodane do destinations_reviews');
      } else {
        console.error(
          'Wystąpił problem podczas dodawania wpisów do destinations_reviews'
        );
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  const handleAccept = async (reviewId) => {
    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/updateReview.php',
        {
          reviewId: reviewId,
        }
      );

      fetchUncheckedReviews();
      if (response.data.status === 1) {
        console.log(response.data);
        console.log('Flags updated successfully');
      } else {
        console.error('Failed to update flags');
      }
    } catch (error) {
      console.error('Error updating flags:', error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/updateReviewDelete.php',
        {
          reviewId: reviewId,
        }
      );

      fetchUncheckedReviews();
      if (response.data.status === 1) {
        fetchUncheckedReviews();
        console.log('Flags updated successfully');
      } else {
        console.error('Failed to update flags');
      }
    } catch (error) {
      console.error('Error updating flags:', error);
    }
  };

  const fetchUncheckedReviews = async () => {
    try {
      const response = await axios.get(
        'http://localhost/TripTipApi/backend/getReviewsToCheck.php'
      );
      console.log(response.data);

      if (response.data.status === 1) {
        console.log('fetchuje');
        const uncheckedReviews = response.data.reviews;
        setUncheckedReviews(uncheckedReviews);
      } else {
        setUncheckedReviews([]);
        console.log('Brak niezweryfikowanych opinii');
      }
    } catch (error) {
      console.error(
        'Błąd podczas pobierania niezweryfikowanych opinii:',
        error
      );
    }
  };

  useEffect(() => {
    fetchUncheckedReviews();
  }, []);

  return (
    <StyledWrapper>
      <div className='container'>
        <ul>
          <li className='header'>
            <div className='idx elem'>ID</div>
            <div className='userName elem'>User name</div>
            <div className='destId elem'>Card ID</div>
            <div className='content elem'>Content</div>
            <div className='action'>Action</div>
          </li>
          {uncheckedReviews &&
            uncheckedReviews.map((review, idx) => (
              <li key={review.id}>
                <div className='idx elem'>{idx + 1}. </div>
                <div className='userName elem'>{review.user_name}</div>
                <div className='destId elem'>{review.dest_id}</div>
                <div className='content elem'>{review.content}</div>
                <div className='buttons'>
                  <div
                    className='btn accept'
                    onClick={() => {
                      handleAccept(review.id);
                      addDestinationReview(review.dest_id, review.id);
                    }}
                  >
                    Accept
                  </div>
                  <div
                    className='btn delete'
                    onClick={() => {
                      handleDelete(review.id);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </StyledWrapper>
  );
};

export default AdminReviews;
