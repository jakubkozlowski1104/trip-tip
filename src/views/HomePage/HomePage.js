import { StyledHomeWrapper } from './HomePage.styles';

const HomePage = () => {
  return (
    <StyledHomeWrapper>
      <div className='info'>
        <div className='category'>Relax destinations</div>
        <div className='sort-by'>Past 24 hours</div>
      </div>
      <div className='cards'>
        <div className='card'>1</div>
        <div className='card'>2</div>
        <div className='card'>3</div>
        <div className='card'>4</div>
        <div className='card'>5</div>
        <div className='card'>6</div>
      </div>
    </StyledHomeWrapper>
  );
};

export default HomePage;
