import {Link, WrapperLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <WrapperLink>
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link>
    </WrapperLink>
  );
};

export default AuthMenu;
