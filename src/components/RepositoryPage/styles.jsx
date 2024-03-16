import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardRepositorio = styled.div`
  width: 20rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #ccc
  margin: 0 auto;
`;

export const CardRepositorioSimple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid #ffff;
`;

export const Title = styled.h1`
  padding: 8px;
  margin-bottom: 8px;
  font-size: 30px;
  border-radius: 5px;
`;

export const RepositoriesList = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display:flex;
  gap:1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h2 {
    color: #352f44;
    font-size: 18px;
  }

  p {
    color: #433db9;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const BackButton = styled(Link)`
  background-color: #4f46e5;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  padding: 1rem;
  margin-top: 5rem;

  &:hover {
    background-color: #3c3480;
  }
`;
