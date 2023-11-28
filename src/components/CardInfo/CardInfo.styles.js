import styled from 'styled-components';

export const CardIndoWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  width: 19%;
  height: calc(100vh - 60px);
  z-index: 9;
  border-left: 1px solid #dbdbdb;

  .padding-top {
    perspective: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    padding-top: 60px;

    .name {
      display: flex;
      justify-content: center;
      p {
        font-weight: 600;
        font-size: 1.3rem;
      }
    }

    .img {
      display: flex;
      justify-content: center;
      transform-style: preserve-3d;
      perspective-origin: center;
      cursor: pointer;

      img {
        position: relative;
        width: 100%;
        transform: rotateY(-10deg);
        transition: transform 0.5s ease;
      }
    }
    .img:hover {
      animation: rotateImage 0.5s forwards;
    }

    @keyframes rotateImage {
      0% {
        transform: rotateY(-10deg);
      }
      50% {
        transform: rotateY(10deg);
      }
      100% {
        transform: rotateY(-10deg);
      }
    }

    .likes-saves {
      display: flex;
      justify-content: space-around;

      .saves {
        i {
          color: green;
          font-size: 1.2rem;
        }
      }
      .likes {
        i {
          color: red;
          font-size: 1.2rem;
        }
      }
    }

    .read-more {
      border: 1px solid gray;
      border-radius: 50px;
      padding: 7px 20px;
      color: #f55153;
      background-color: white;
      border: 1px solid #f55153;
      cursor: pointer;
      font-size: 0.8rem;
      transition: 0.2s;
      font-family: 'montserrat', sans-serif;
      font-weight: 600;
    }

    .read-more:hover {
      background-color: #f55153;
      color: white;
    }
  }
`;
