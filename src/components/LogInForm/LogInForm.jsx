import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operation';

import {
  FormContainer,
  LogoContainer,
  FormWrapper,
  FormGroup,
  SubmitButton,
  QuestionLink,
  TextLink,
} from '../../styled/Form.styled';

const LogInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault(event);

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <LogoContainer>Log In to PhoneBook</LogoContainer>
      <FormWrapper onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
            id="userEmail"
            onChange={handleChange}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            id="userPassword"
            onChange={handleChange}
            value={password}
          />
        </FormGroup>
        <SubmitButton type="submit">Log In</SubmitButton>
        <TextLink>
          Don't have an account?
          <QuestionLink to="/register"> Sign up now</QuestionLink>
        </TextLink>
      </FormWrapper>
    </FormContainer>
  );
};

export default LogInForm;
