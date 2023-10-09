import styled from 'styled-components';

export const UserMenuBlock = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;

  font-size: 25px;
  font-weight: 600;
`;

export const NameUser = styled.span`
  color: red;
`;

export const LogOut = styled.button`
  padding: 10px 10px;
  margin-left: 20px;

  font-weight: 600;
  color: white;
  background-color: blue;
  border-radius: 7px;
  border: none;

  cursor: pointer;
`;
