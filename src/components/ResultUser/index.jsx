// Página do Usuário Localizado
import React from "react";
import { Card, Container, SearchButton } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ResultUser = () => {
  const { username } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.userData;

  const handleSeeRepositories = () => {
    if (userData) {
      navigate(`/repositories/${username}`);
    }
  };


  return (
    <Container>
      {userData && (
        <>
          <Card>
            <img src={userData.avatar_url} alt="Avatar" />
            <h2>{userData.name}</h2>
            <p>Cidade: {userData.location}</p>
            <p>Seguidores: {userData.followers}</p>
            <p>Seguindo: {userData.following}</p>
          </Card>
          <SearchButton onClick={handleSeeRepositories}>
            Ver Repositórios
          </SearchButton>
        </>
      )}
    </Container>
  );
};
