import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Nav, Link } from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </Nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
