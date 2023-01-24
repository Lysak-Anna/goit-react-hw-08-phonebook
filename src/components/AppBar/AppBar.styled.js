import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.logo};
  font-weight: 700;
  text-decoration: none;
`;

export const StyledLogin = styled(NavLink)`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 4px 8px;
  text-decoration: none;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
  width: 80px;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    color: ${({ theme }) => theme.colors.logo};
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    color: ${({ theme }) => theme.colors.logo};
  }
`;
export const Header = styled.header`
  height: 100px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
`;
