import React from 'react';
import { BackButton, Container } from './styled';



export const NotFound = () => {
  return (
    <Container>
    <div>
      <h1>Usuário não encontrado</h1>
      <br />
      <img 
      src="https://cdn0.iconfinder.com/data/icons/finite-social-1/16/github-512.png" 
      alt="Imagem Not Found"
      style={{ width: '95px' }} />
      <br />
      <BackButton to="/">Voltar para Pesquisas</BackButton>
    </div>
    </Container>
  );
};

