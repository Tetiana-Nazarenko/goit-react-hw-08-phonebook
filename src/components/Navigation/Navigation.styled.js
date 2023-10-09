import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  margin: 25px;
  font-size: 25px;
  font-weight: 600;

  &:hover {
    color: red;
  }
`;
