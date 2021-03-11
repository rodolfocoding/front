import React, { useState, useCallback, useRef } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ValidationError } from 'yup';
import { toast } from 'react-toastify';

import { Container, Content, FormContent } from './styles';
import loginValidateSchema from './SchemaValidation';
import Diamond from '../../assets/diamond.svg';
import Mail from '../../assets/mail.svg';
import PasswordIcon from '../../assets/password.svg';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';

export default function SignIn() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatchSignIn = useDispatch();

  const singIn = async (values) => {
    const { email, password } = values;

    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    dispatchSignIn({ type: 'SIGN_IN', data });
  };
  const handleSubmit = useCallback(async (values) => {
    setLoading(true);
    try {
      formRef.current.setErrors({});
      await loginValidateSchema.validate(values, {
        abortEarly: false,
      });
      await singIn(values);
      setLoading(false);
      setIsLoggedIn(true);
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
        setLoading(false);
        setIsLoggedIn(false);
        return;
      }
      toast.error(err.response.data.message);
      setLoading(false);
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <Container>
      {isLoggedIn && <Redirect to="/home" />}
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN IN</h1>
          <p>
            Hello there! Sign in and start managing your TrueDiamond account
          </p>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FormContent>
              <Input name="email" type="email" icon={Mail} />
              <Input name="password" type="password" icon={PasswordIcon} />

              <span>
                New user? Click<Link to="/signup"> here!</Link>
              </span>

              <Button text={'SIGN IN NOW'} loading={loading} />
            </FormContent>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
