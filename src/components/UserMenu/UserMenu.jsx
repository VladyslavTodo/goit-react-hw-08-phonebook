import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operation';

import { Wrapper, Btn, Name } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectUser);

  return (
    <Wrapper>
      <Name>Welcome, {name}</Name>
      <Btn onClick={() => dispatch(logOut())}>Log Out</Btn>
    </Wrapper>
  );
};

export default UserMenu;
