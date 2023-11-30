import { StyledAsideNavWrapper } from '../AsideNav/AsideNav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonHiking,
  faCity,
  faSun,
  faUmbrellaBeach,
  faPersonWalkingLuggage,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  { icon: faPersonHiking, type: 'active' },
  { icon: faCity, type: 'cities' },
  { icon: faSun, type: 'nature' },
  { icon: faUmbrellaBeach, type: 'relax' },
  { icon: faPersonWalkingLuggage, type: 'adventure' },
  { icon: faLandmark, type: 'historical' },
];

const AsideNav = ({ activeCategory, setActiveCategory }) => {
  const handleIconClick = (type) => {
    setActiveCategory(type === activeCategory ? 'none' : type);
  };

  return (
    <StyledAsideNavWrapper $activeCategory={activeCategory}>
      <div className='pick-category'>
        <p>choose a category</p>
      </div>
      <div className='options'>
        {icons.map(({ icon, type }) => (
          <div
            key={type}
            className='option'
            onClick={() => handleIconClick(type)}
          >
            <div className={`${type} icon`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <p>{type}</p>
          </div>
        ))}
      </div>
    </StyledAsideNavWrapper>
  );
};

export default AsideNav;
