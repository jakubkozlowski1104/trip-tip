import styled from 'styled-components';

export const StyledCenter = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 30;
  background-color: white;
  padding: 100px 20px 20px 20px;

  .content-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slider {
      position: relative;

      .arrow {
        position: absolute;
        background-color: red;
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
          color: white;
          font-size: 1.5rem;
        }
      }
      .left {
        position: absolute;
        left: -7%;
      }

      .right {
        right: -7%;
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

        .dot {
          width: 15px;
          height: 15px;
          margin: 3px;
          background-color: #b9c1c0;
          border-radius: 50px;
          transition: 0.7s;
          cursor: pointer;
        }

        .dot.active {
          width: 18px;
          height: 18px;
          background-color: #f55153;
        }
      }
    }

    .read-section {
      margin-top: 30px;
      display: flex;

      .description {
        flex-basis: 70%;
        border-right: 2px solid black;
        margin-top: 40px;
        padding: 0 40px 40px 40px;

        .title {
          display: flex;
          justify-content: center;
          font-size: 1.4rem;
        }

        .content {
        }
      }
    }

    .reviews {
      margin: 40px;
      flex-grow: 1;
      .title {
        display: flex;
        justify-content: center;
        font-size: 1.4rem;
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
          p {
            font-size: 0.9rem;
            font-weight: normal;
            color: #4f4f4f;
          }
        }
      }
    }
  }
`;
