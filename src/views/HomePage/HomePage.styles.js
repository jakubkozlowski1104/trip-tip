import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  left: 10%;
  width: 71%;
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: #b9c1c0;
  text-decoration: none;
  background-color: #f4f6f5;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px 50px 0 50px;
  height: 100%;

  .headers {
    margin-top: 50px;
    display: flex;
    padding: 20px 0;
    justify-content: space-between;

    * {
      display: flex;
      align-items: center;
    }

    .category {
      color: black;
      flex-grow: 1;
      font-size: 1.4rem;
      font-weight: normal;
    }

    .sort-by {
      justify-content: flex-end;
      flex-grow: 1;
      color: #fe4f51;
    }
  }

  .cards {
    position: relative;
    box-sizing: border-box;
    flex-grow: 25;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 80vh; /* Ustaw maksymalną wysokość sekcji cards */
    overflow: auto; /* Dodaj pasek przewijania, gdy zawartość przekroczy maksymalną wysokość */
    /* Reszta stylów */

    .card {
      box-sizing: border-box;
      position: relative;
      flex-basis: 30%;
      height: 430px;
      background-color: white;
      margin-top: 10px;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Styl cienia */
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;

      .img {
        flex-basis: 44%;
        position: relative;
        overflow: hidden;
        border-radius: 4px 4px 0px 0px;

        img {
          width: 100%;
          transition: 0.5s;
          cursor: pointer;
        }

        .cover-img {
          top: 169px;
          position: absolute;
          border-left: 480px solid transparent;
          border-right: 1px solid transparent;
          border-bottom: 20px solid white;
        }
        .country {
          position: absolute;
          top: 20px;
          left: 20px;
          border-radius: 4px;

          p {
            position: relative;
            padding: 4px;
            border-radius: 4px 0 0 4px;
            text-transform: uppercase;
            color: white;
            background-color: #f55153;

            width: 110%;
            font-size: 0.85rem;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Styl cienia */
          }
          p::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: -20px;
            border-left: 10px solid transparent;
            border-right: 13px solid #f55153;
            border-bottom: 20px solid transparent;
            z-index: 10;
            transform: rotate(180deg);
          }
          p::before {
            content: '';
            position: absolute;
            top: 9px;
            right: -20px;
            border-left: 10px solid transparent;
            border-right: 21px solid #f55153;
            border-bottom: 13px solid transparent;
            z-index: 10;
            transform: rotate(270deg);
          }
        }
      }

      .img:hover img {
        filter: brightness(70%);
      }

      .img::after {
        content: 'SEE ON MAPS';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.2rem;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .img:hover::after {
        opacity: 1;
      }

      .read-more {
        position: absolute;
        bottom: 55%;
        right: 7%;
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
      .flag {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 5%;
        right: 6%;
        z-index: 30;
        display: flex;
        width: 50px;
        justify-content: center;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Styl cienia */

        img {
          width: 100%;
        }
      }

      .down-section {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 10px 40px 20px 40px;

        .title {
          display: flex;
          align-items: center;
          flex-grow: 0.9;
          margin-top: 10px;
          margin-bottom: 0;

          h2 {
            font-size: 1.3rem;
            color: #4f4f4f;
            font-weight: 500;
          }
        }

        .description {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 0.7;

          p {
            line-height: 23px;
            font-size: 0.9rem;
            font-weight: normal;
            color: #4f4f4f;
          }
        }

        .info {
          flex-grow: 1;
          display: flex;
          align-items: center;

          .date {
            flex-grow: 1;
            p {
              font-size: 0.9rem;
              font-weight: normal;
              color: #0abfbc;
            }
          }

          .icons {
            flex-grow: 1;
            display: flex;
            justify-content: space-around;
            .icon {
              transition: 0.3s;
              font-size: 1.2rem;
              cursor: pointer;
            }
            .likes:hover {
              color: blue;
            }

            .saved:hover {
              color: blue;
            }
          }
        }
      }
    }
  }
  .cards::-webkit-scrollbar {
    margin-left: 10px;
    width: 12px;
  }

  .cards::-webkit-scrollbar-track {
    background-color: blue;
  }

  .cards::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 6px;
    border: 3px solid red;
  }

  .cards::-moz-scrollbar {
    width: 12px;
  }

  .cards::-moz-scrollbar-track {
    background-color: blue;
  }

  .cards::-moz-scrollbar-thumb {
    background-color: red;
    border-radius: 6px;
    border: 3px solid red;
  }
`;
