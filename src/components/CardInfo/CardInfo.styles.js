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

      img {
        width: 100%;
        transform: rotateY(-10deg);
        transition: transform 0.5s ease;
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
  }
`;
