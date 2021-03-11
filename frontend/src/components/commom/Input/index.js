import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Input } from './styles';

import { Container } from './styles';

export default function InputComponent({ name, type, icon, ...props }) {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Input icon={icon} type={type} name={name} ref={inputRef} {...props} />
      <span>{error}</span>
    </Container>
  );
}
