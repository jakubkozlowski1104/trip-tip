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

    .read-section {
      margin-top: 30px;
      display: flex;

      .description {
        border-right: 1px solid black;
        margin-top: 40px;
        padding: 0 40px 40px 40px;
        flex-basis: 70%;

        .title {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          font-size: 1.4rem;
        }
        .content {
        }
      }

      .reviews {
        flex-basis: 30%;

        width: 1000px;
        margin: 40px;
        .title {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          font-size: 1.4rem;
        }

        .new-review {
          margin-top: 20px;
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

        .new-review:hover {
          background-color: #f55153;
          color: white;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 40;
          display: flex;
          justify-content: center;
          align-items: center;

          .modal-container {
            position: absolute;
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            width: 400px;
            padding: 10px;

            .review-type {
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 10px;
              position: relative;

              .dots {
                display: flex;
                align-items: center;
                gap: 5px;

                .dot {
                  width: 15px;
                  height: 15px;
                  border: 1px solid #f55153;
                  border-radius: 50px;
                  cursor: pointer;
                }

                .dot.fill {
                  background-color: #f55153;
                }
              }
            }

            textarea {
              resize: none;
              height: 170px;
            }

            .buttons {
              display: flex;
              padding: 10px;
              gap: 20px;
              .close-btn {
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

              .close-btn:hover {
                background-color: #f55153;
                color: white;
              }
            }
          }
        }

        .review {
          margin-top: 30px;
          .title {
            padding-bottom: 3px;
            color: #f55153;
            font-weight: bold;
          }

          .header-review {
            .user-name {
              position: relative;
              color: #0abfbc;
              font-weight: bold;
              margin-bottom: 5px;
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
                  border: 1px solid #f55153;
                  border-radius: 50px;
                }

                .dot.fill {
                  background-color: #f55153;
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
  }
`;
