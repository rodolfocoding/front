import React from 'react';
import Loader from 'react-loader-spinner';
import { Button, Container } from './styles';

export default function ButtonComponent(props) {
  const { text, type = 'submit', loading } = props;
  return (
    <Button type={type}>
      {loading ? <Loader type="TailSpin" height={21} width={21} /> : text}
    </Button>
  );
}
