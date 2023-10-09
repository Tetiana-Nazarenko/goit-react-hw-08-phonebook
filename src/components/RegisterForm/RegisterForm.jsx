import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  FormBlock,
  Form,
  LabelTitle,
  Input,
  ButtonRegister,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormBlock>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LabelTitle>
          Username:
          <br />
          <Input type="text" name="name" />
        </LabelTitle>
        <LabelTitle>
          Email: <br />
          <Input type="email" name="email" />
        </LabelTitle>
        <LabelTitle>
          Password: <br />
          <Input type="password" name="password" />
        </LabelTitle>
        <ButtonRegister type="submit">Register</ButtonRegister>
      </Form>
    </FormBlock>
  );
};
