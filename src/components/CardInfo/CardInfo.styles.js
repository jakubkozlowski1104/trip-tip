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
    padding: 25px;
    padding-top: 60px;
    height: 100%;

    .name {
      display: flex;
      justify-content: center;
      p {
        font-weight: 600;
        font-size: 1.2rem;
        color: #f55153;
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
      .plus {
        position: absolute;
        bottom: -15px;
        left: 35px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #47cbc4;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;

        .circle {
          position: absolute;
          width: 23px;
          height: 23px;
          border-radius: 50px;
          background-color: white;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            color: #47cbc4;
          }
        }
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

    .likes-saves-section {
      padding-top: 10px;
      display: flex;
      justify-content: space-around;
      gap: 5px;

      .sav-lik {
        .title {
          color: #f55153;
          font-weight: bold;
          padding-bottom: 3px;
        }
        .info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
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

    .categories {
      align-self: flex-start;
      .title {
        color: #f55153;
        font-weight: bold;
        padding-bottom: 3px;
      }
      .titles {
        display: flex;
        flex-direction: column;

        .single-title {
          display: flex;
          align-items: center;
          i {
            color: #f55153;
          }
          li {
            margin-left: 5px;
            list-style-type: none;
            font-size: 0.9rem;
            font-weight: normal;
            color: #4f4f4f;
          }
        }
      }
    }

    .description {
      .title {
        padding-bottom: 3px;

        color: #f55153;
        font-weight: bold;
      }
      p {
        font-size: 0.9rem;
        font-weight: normal;
        color: #4f4f4f;
      }
    }

    .review {
      flex-grow: 5;
      .title {
        padding-bottom: 3px;
        color: #f55153;
        font-weight: bold;
      }

      .header-review {
        .user-name {
          position: relative;
          color: #0abfbc;
          .rating {
            position: absolute;
            top: 0;
            right: 0;
            height: 20px;
            display: flex;
            gap: 3px;

            .dot {
              width: 15px;
              height: 15px;
              border: 1px solid #0abfbc;
              border-radius: 50px;
            }

            .dot.fill {
              background-color: #0abfbc;
            }
          }
        }
      }
      .content {
        font-size: 0.9rem;
        font-weight: normal;
        color: #4f4f4f;
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
