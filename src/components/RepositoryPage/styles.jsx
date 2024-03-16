import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardRepositorio = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  width: 50vw;
  height: 50vh;
`;

export const CardRepositorioSimple = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
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
  padding: 15px;
  border-radius: 5px;
  width: 80vw;
  height: 70vh;

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
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3c3480;
  }
`;
