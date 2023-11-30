import styled from 'styled-components';

export const StyledAsideNavWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  background-color: white;
  width: 10%;
  height: calc(100vh - 60px);
  z-index: 9;
  border-right: 1px solid #dbdbdb;

  .pick-category {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4.7%;
    border-bottom: 1px solid #dbdbdb;
  }

  .options {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    height: 80%;

    .option {
      padding-top: 10px;
      border-bottom: 1px solid #dbdbdb;
      flex-basis: 15%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-top: 2px solid blue;
      transition: 0.3s;

      p {
        text-transform: uppercase;
        color: #b9c1c0;
        font-weight: 700;
      }

      .icon {
        color: #b9c1c0;
        font-size: 1.6rem;
      }

      .icon.cities {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'cities' ? '#f55153' : '#b9c1c0'};
      }
      .icon.active {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'active' ? '#f55153' : '#b9c1c0'};
      }
      .icon.nature {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'nature' ? '#f55153' : '#b9c1c0'};
      }
      .icon.relax {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'relax' ? '#f55153' : '#b9c1c0'};
      }
      .icon.adventure {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'adventure' ? '#f55153' : '#b9c1c0'};
      }
      .icon.historical {
        color: ${({ $activeCategory }) =>
          $activeCategory === 'historical' ? '#f55153' : '#b9c1c0'};
      }
    }

    .option:hover {
      cursor: pointer;
    }
  }
`;
