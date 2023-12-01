import styled from 'styled-components';
import { Spiner } from 'components/Loader/loader';
import { QuestionLink } from '../styled/Form.styled';

export const MainText = styled.h1`
  width: 600px;
  text-align: center;
  margin: 100px auto 0;
  font-family: cursive;
`;

const Home = () => {
  return (
    <>
      <MainText>
        Welcome to PhoneBook App if you are not yet registered, please{' '}
        <QuestionLink to="/register">register</QuestionLink> or{' '}
        <QuestionLink to="/login">log in</QuestionLink> to the your account
      </MainText>
      <Spiner />
    </>
  );
};

export default Home;
