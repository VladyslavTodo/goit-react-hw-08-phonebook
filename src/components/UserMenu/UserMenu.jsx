import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operation';
import logo from '../../images/logo_default.png';

import { Wrapper, Btn, Name, Logo } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUser);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Logo src={logo} alt="" />
      <Btn onClick={() => dispatch(logOut())}>Log Out</Btn>
    </Wrapper>
  );
};

export default UserMenu;
