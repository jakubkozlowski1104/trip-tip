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
  height: 200vh;
  overflow: hidden;
  background-color: #f4f6f5;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px 50px 0 50px;

  .headers {
    margin-top: 50px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;

    * {
      display: flex;
      align-items: center;
    }

    .category {
      color: black;
      flex-grow: 1;
      background-color: blueviolet;
      font-size: 1.4rem;
      font-weight: normal;
    }

    .sort-by {
      justify-content: flex-end;
      flex-grow: 1;
      background-color: red;
      color: #fe4f51;
    }
  }

  .cards {
    box-sizing: border-box;
    padding: 10px;
    flex-grow: 25;
    height: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

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

      .img {
        flex-basis: 44%;
        position: relative;
        overflow: hidden;
        border-radius: 4px 4px 0px 0px;

        img {
          width: 100%;
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
            border-left: 10px solid transparent; /* Lewa krawędź trójkąta */
            border-right: 13px solid #f55153; /* Prawa krawędź trójkąta */
            border-bottom: 20px solid transparent; /* Dolna krawędź trójkąta */
            z-index: 10; /* Ustawia warstwę trójkąta pod treścią p */
            transform: rotate(180deg); /* Rotates the triangle */
          }
          p::before {
            content: '';
            position: absolute;
            top: 9px;
            right: -20px; /* Reguluje pozycję trójkąta */
            border-left: 10px solid transparent; /* Lewa krawędź trójkąta */
            border-right: 21px solid #f55153; /* Prawa krawędź trójkąta */
            border-bottom: 13px solid transparent; /* Dolna krawędź trójkąta */
            z-index: 10; /* Ustawia warstwę trójkąta pod treścią p */
            transform: rotate(270deg); /* Rotates the triangle */
          }
        }
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
          flex-grow: 1;

          h2 {
            font-size: 1.3rem;
            color: black;
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
            color: black;
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
              color: lightblue;
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
`;
