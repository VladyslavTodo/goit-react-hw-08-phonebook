import styled from 'styled-components';

export const Label = styled.label`
  align-items: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;

  input {
    padding: 8px 15px;
    border-radius: 8px;
    border: 1px solid #198754;
    background-color: #464e56;
    color: black;

    &:focus {
      background-color: #e8f0fe;
    }
  }
`;
