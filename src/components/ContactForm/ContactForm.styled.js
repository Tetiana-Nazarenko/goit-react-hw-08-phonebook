import styled from 'styled-components';

export const FormBlock = styled.div`
  margin: 20px;
  background-color: yellow;
  border-radius: 15px;
  border: 1px solid black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LabelTitle = styled.label`
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
`;
export const InputName = styled.input`
  margin: 35px;
  padding: 10px;
  width: 640px;
  color: blue;
  font-weight: 600;
  font-size: 16px;
`;
export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 640px;
  color: blue;
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonAddContact = styled.button`
  padding: 15px 15px;
  margin: 20px auto;
  font-weight: 600;
  font-size: 22px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 30%;
  cursor: pointer;
`;
