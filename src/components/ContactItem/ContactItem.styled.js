import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  font-size: 14px;
  border: 1px solid transparent;
  color: black;
  background-color: aquamarine;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 10px 10px 15px 10px;
  cursor: pointer;
  transition: all 0.3s linear 0s;

  &:hover {
    background-color: #60bc9d;
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
    margin: 0 auto 10px;
  }
`;
