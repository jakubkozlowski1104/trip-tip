import styled from 'styled-components';

export const StyledCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .content-container {
    overflow: hidden;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
    background-color: #b9c1c0;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
      color: #f55153;
      font-size: 1.5rem;
    }
  }
  .left {
    position: absolute;
    left: -10%;
  }

  .right {
    right: -10%;
  }

  .dots {
    position: absolute;
    height: 40px;
    bottom: -6%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 15px;
    height: 15px;
    margin: 3px;
    border-radius: 50px;
    transition: 0.7s;
    cursor: pointer;
    border: none;
  }
`;
