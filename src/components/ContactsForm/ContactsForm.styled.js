import styled from 'styled-components';

export const Form = styled.form`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  color: black;
  background-color: #2b3035;
  border-radius: 8px;
  padding: 8px 16px;
  transition: all 0.3s linear 0s;
  /* box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 3px, rgba(0, 0, 0, 0.17) 0px 2px 3px;
  margin: 20px auto;
  box-shadow: rgb(67, 135, 112) 9px 9px 18px, rgb(149, 255, 248) -9px -9px 18px;
  justify-content: center; */
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  color: white;

  input {
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid #198754;
    background-color: #464e56;
    &:focus {
      background-color: #e8f0fe;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid transparent;
  color: white;
  background-color: #198754;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 20px 20px 30px 20px;
  cursor: pointer;
  transition: all 0.3s linear 0s;
  box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 3px, rgba(0, 0, 0, 0.17) 0px 2px 3px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #313131;
  }
`;
