import { Route, Routes } from 'react-router-dom';
import { currentUser } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';

import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

import { Container } from './App.styled';

const Home = lazy(() => import('../../pages/Home'));
const LogIn = lazy(() => import('../../pages/LogIn'));
const SignUp = lazy(() => import('../../pages/SignUp'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
