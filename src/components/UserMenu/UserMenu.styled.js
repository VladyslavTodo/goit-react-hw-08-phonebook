import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #198754;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #198754;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #19875429;
  }

  &.active {
    color: white;
    background-color: #198754;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  color: white;
`;

export const Btn = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #198754;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #198754;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #19875429;
  }

  &.active {
    color: white;
    background-color: #198754;
  }
`;

export const Logo = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-left: -15px;
`;
