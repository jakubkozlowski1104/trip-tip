import { StyledHomeWrapper } from './HomePage.styles';

const HomePage = () => {
  return (
    <StyledHomeWrapper>
      <div className='category'>Relax destinations</div>
      <div className='sort-by'>Past 24 hours</div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </StyledHomeWrapper>
  );
};

export default HomePage;
