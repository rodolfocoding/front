import React, { useState, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { Link, Redirect } from 'react-router-dom';
import { ValidationError } from 'yup';
import { toast } from 'react-toastify';

import { Container, Content, FormContent } from './styles';
import loginValidateSchema from './SchemaValidation';
import Diamond from '../../assets/diamond.svg';
import UserIcon from '../../assets/user.svg';
import PasswordIcon from '../../assets/password.svg';
import Mail from '../../assets/mail.svg';
import Input from '../../components/commom/Input';
import Button from '../../components/commom/Button';

export default function SignUp() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (values) => {
    const { name, email, password } = values;
    await api.post('/users', { name, email, password_hash: password });
  };

  const handleSubmit = useCallback(async (values) => {
    setLoading(true);
    try {
      formRef.current.setErrors({});

      await loginValidateSchema.validate(values, {
        abortEarly: false,
      });

      await signUp(values);

      toast.success('The user was register');
      setLoading(false);
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
        setLoading(false);
        return;
      }
      setLoading(false);
      toast.error(err.response.data.message);
    }
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN UP</h1>
          <p>
            Hello there! Sign up and start managing your TrueDiamond account
          </p>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FormContent>
              <Input
                name="name"
                placeholder="Name"
                type="text"
                icon={UserIcon}
              />
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                icon={Mail}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                icon={PasswordIcon}
              />

              <span>
                Click to <Link to="/"> sign in!</Link>
              </span>

              <Button text={'REGISTER'} loading={loading} />
            </FormContent>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
