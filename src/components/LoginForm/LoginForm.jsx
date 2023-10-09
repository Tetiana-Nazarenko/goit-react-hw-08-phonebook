import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  FormBlock,
  Form,
  LabelTitle,
  Input,
  ButtonLogIn,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          Email: <br />
          <Input type="email" name="email" />
        </LabelTitle>
        <LabelTitle>
          Password: <br />
          <Input type="password" name="password" />
        </LabelTitle>
        <ButtonLogIn type="submit">Log In</ButtonLogIn>
      </Form>
    </FormBlock>
  );
};
