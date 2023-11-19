import { StyledHomeWrapper } from './HomePage.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <StyledHomeWrapper>
      <div className='headers'>
        <div className='category'>Discover destinations</div>
        <div className='sort-by'>Past 24 hours</div>
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='img'>
            <img src='' alt='' />
          </div>
          <div className='country'>Armenia</div>
          <div className='flag'>FLAG</div>
          <div className='title'>The Symbol of Armenia - Ararat</div>
          <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            sequi hic repudiandae quos aspernatur eveniet a corporis officiis id
            fuga.
          </div>
          <div className='info'>
            <div className='date'>November 02, 2023</div>
            <div className='share'>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
            <div className='saved'>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className='likes'>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </StyledHomeWrapper>
  );
};

export default HomePage;
