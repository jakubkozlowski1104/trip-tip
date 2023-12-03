import styled from 'styled-components';

export const StyledCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .content-container {
    overflow: hidden;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;

    .slider {
      white-space: nowrap;
      transition: transform 0.3s;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 490px;
    background-color: #fff;
  }

  .carousel-item-text {
    font-size: 1.15rem;
    margin: 40px 0 40px 0;
    padding: 0 20px 0 20px;
    white-space: normal;
    color: #617d98;
  }
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-buttons {
    display: flex;
    justify-content: space-evenly;
  }

  .arrow {
    position: absolute;
    background-color: blue;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000000;
    /* ... pozostałe style strzałki */

    i {
      color: black;
      font-size: 1.5rem;
    }
  }
  .left {
    position: absolute;
    left: -10%;
  }

  .right {
    right: -7%;
  }

  .indicators {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }

  .indicator-buttons {
    border: none;
    cursor: pointer;
  }

  .indicators > button {
    margin: 5px;
    background: none;
  }

  .indicator-symbol {
    color: #26343f;
  }

  .indicator-symbol-active {
    color: #ffffff;
  }
`;
