import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 450px;
  margin: 100px auto;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
`;

export const LogoContainer = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
    &::placeholder {
      opacity: 0.5;
    }
    &:focus {
      outline: none;
      border-color: #1778f2;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #313131;
  }
`;

export const TextLink = styled.p`
  align-self: center;
  font-weight: 500;
`;

export const QuestionLink = styled(NavLink)`
  color: #1778f2;
  text-decoration: none;
  margin-left: 6px;
  &:hover {
    text-decoration: underline;
  }
`;
