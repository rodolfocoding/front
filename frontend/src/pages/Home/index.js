import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function Home() {
  const { userInfo } = useSelector((state) => state.signIn);
  return (
    <Container>
      {userInfo && userInfo.data ? (
        <div>
          <h1>Olá, {userInfo.data.user.name}</h1>
          <hr />
          <div>
            <h3>Dados Redux:</h3>
            <p>Id: {userInfo.data.user.id}</p>
            <p>Email: {userInfo.data.user.email}</p>
            <p>Data Criação: {userInfo.data.user.createdAt}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Não há dados :(</h1>
        </div>
      )}
    </Container>
  );
}
