import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 20px;
  padding: 20px;
  background-color: yellow;
  border-radius: 15px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  gap: 15px;

  color: blue;
  font-size: 26px;
  font-weight: 500;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const DeleteButton = styled.button`
  padding: 10px 10px;

  font-weight: 600;
  color: white;
  background-color: blue;
  border-radius: 7px;
  border: none;

  cursor: pointer;
`;
