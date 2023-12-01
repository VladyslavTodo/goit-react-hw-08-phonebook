import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  font-size: 14px;
  border: 1px solid transparent;
  color: white;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 10px 10px 15px 10px;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  &:hover {
    background-color: #198754;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 200;
  font-size: 40px;
  text-align: center;
`;

export const WrapperUl = styled.ul`
  text-align: center;
  li {
    background-color: #00000012;
    border-radius: 8px;
    width: 400px;
    margin: 10px auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #198754;
    p {
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #9f9f9f;
        transition: all 0.3s linear 0s;
        &:hover {
          text-decoration: underline;
          color: #198754;
        }
      }
    }
  }
`;
