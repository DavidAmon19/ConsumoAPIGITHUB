import styled from 'styled-components';

const corPrincipal = '#6C63FF';    // Azul vibrante
const corHover = '#4F46E5';        // Tom mais escuro de azul para hover
const corBorda = '#433DB9';        // Cor da borda mais escura
const corTexto = '#2C2C2C';        // Cor do texto mais escura
const corFundoCard = '#F0F2F5';    // Cor de fundo do card mais suave

export const SearchButton = styled.button`
  border-radius: 8px;
  border: 1px solid ${corPrincipal};
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${corPrincipal};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    background-color: ${corHover};
    border-color: ${corHover};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  border: 2px solid ${corBorda};
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  background-color: ${corFundoCard};
  text-align: center;
  width:100%;
  max-width:400px;

  img {
    border-radius: 50%;
    width: 250px; 
    height: 250px; 
    border: 2px solid ${corBorda};
  }

  h2 {
    color: ${corBorda};
  }

  p {
    color: ${corPrincipal};
  }

  h3 {
    color: ${corHover};
  }
`;

export const Input = styled.input`
  border: 2px solid ${corBorda};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: ${corFundoCard};
  margin: 10px;
`;
