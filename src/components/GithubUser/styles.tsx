import styled from 'styled-components';

const corPrincipal = '#6C63FF';    // Azul vibrante
const corHover = '#4F46E5';        // Tom mais escuro de azul para hover
const corBorda = '#433DB9';        // Cor da borda mais escura
const corTexto = '#2C2C2C';        // Cor do texto mais escura
const corFundoCard = '#F0F2F5';    // Cor de fundo do card mais suave
const corFundoserch = '#e5f01084';    // Cor de fundo do serch

export const SearchButton = styled.button`
  border-radius: 8px;
  border: 1px solid ${corPrincipal};
  padding: 0.5em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${corPrincipal};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  margin:5px;

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
  background-color: ${corFundoserch};
  border-radius: 5px;
  padding: 10px;
`;

export const GithubIcon = styled.img`
  width: 50px;  
  height: 50px; 
  margin-bottom: -15px;
`;



export const Card = styled.div`
  border: 2px solid ${corBorda};
  border-radius: 5px;
  padding: 20px; 
  margin-top: 20px;
  background-color: ${corFundoCard};
  text-align: center;
  width: 100%;

  img {
    border-radius: 50%;
    width: 220px;
    height: 220px;
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
  padding: 8px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.2rem;
  color: ${corBorda};
  margin: 8px;
`;

export const ErrorMessage = styled.div`

  width: 50vw;
  height: 50vh

  margin: 1rem auto;
  border: 2px solid ${corBorda};

  color: ${corBorda};
  display: flex;
  align-items: center;

  
`;

// img {
//   width: 200px; 
//   height: 200px; 
//   margin-right: 5px;
// }


