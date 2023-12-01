import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Notiflix from 'notiflix';

import { register } from 'redux/auth/operation';

import {
  FormContainer,
  LogoContainer,
  FormWrapper,
  FormGroup,
  SubmitButton,
  TextLink,
  QuestionLink,
} from '../../styled/Form.styled';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => Notiflix.Notify.success('Welcome to Phonebook'))
      .catch(() =>
        Notiflix.Notify.failure(`
A user with this email address already exists`)
      );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <LogoContainer>Sign Up to PhoneBook</LogoContainer>
      <FormWrapper onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            id="userName"
            onChange={handleChange}
            value={name}
          />
        </FormGroup>
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
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <TextLink>
          Don't have an account?
          <QuestionLink to="/login"> Register now</QuestionLink>
        </TextLink>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignUpForm;
