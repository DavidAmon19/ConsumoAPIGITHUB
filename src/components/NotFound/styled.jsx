import styled from "styled-components";
import { Link } from 'react-router-dom';

const corBotao = '#F1FADA';  
const corLetra = '#27005D';
const corHover = '#D67BFF';

export const BackButton = styled(Link)`
    background-color: ${corBotao};
    color: ${corLetra};
    padding: 5px 15px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: ${corHover};
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

