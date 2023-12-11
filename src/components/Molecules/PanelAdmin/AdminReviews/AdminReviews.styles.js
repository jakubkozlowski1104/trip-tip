import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1100px;
  margin-left: 100px;
  margin-top: 40px;

  .container {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        width: 100%;
        display: flex;
        list-style-type: none;

        .idx {
          flex-basis: 5%;
        }

        .userName {
          flex-basis: 15%;
        }

        .destId {
          flex-basis: 7%;
        }

        .content {
          flex-basis: 50%;
        }

        .action {
          flex-basis: 10%;
        }

        .buttons {
          display: flex;
          gap: 10px;
          align-items: center;

          .btn {
            border: 1px solid gray;
            border-radius: 50px;
            color: #f55153;
            width: 80px;
            height: 25px;
            background-color: white;
            border: 1px solid #f55153;
            cursor: pointer;
            font-size: 0.8rem;
            transition: 0.2s;
            font-family: 'montserrat', sans-serif;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .btn:hover {
            background-color: #f55153;
            color: white;
          }
        }
      }
      li.header {
        display: flex;
        list-style-type: none;
      }
    }
  }
`;
