import styled from 'styled-components';

const corPrincipal = '#F64348';    // Vermelho mais vibrante
const corHover = '#F64348';        // Cor para o estado de hover mais intensa
const corBorda = '#F64348';        // Cor da borda
const corTexto = '#1E1E1E';        // Cor do texto
const corFundoCard = '#1E1E1E';    // Cor de fundo do card
const corTextInter = '#FFFF';

export const SearchButton = styled.button`
  border-radius: 8px;
  border: 1px solid ${corPrincipal};
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${corPrincipal};
  color: ${corTextInter};
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
  border: 5px solid ${corBorda};
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  background-color: ${corFundoCard};
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    border-radius: 50%;
    width: 250px; 
    height: 250px; 
    border: 2px solid ${corBorda};
  }

  h2 {
    color: ${corBorda};
  }

  P {
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
  color: ${corTexto};
  margin: 10px;
`;

export const ErrorMessage = styled.div`

`;