// Página do Usuário Localizado
import React from "react";
import { Card, Container, SearchButton, ItemsCard } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "boxicons";

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
            <ItemsCard>
              <p>Cidade: {userData.location}</p>
              <box-icon name="world"></box-icon>
            </ItemsCard>

            <ItemsCard>
              <ItemsCard>
                <p>
                  Seguidores: {userData.followers}{" "}
                  <box-icon name="check"></box-icon>
                </p>
              </ItemsCard>
              <ItemsCard>
                <p>
                  Seguindo: {userData.following}{" "}
                  <box-icon name="check-double"></box-icon>
                </p>
              </ItemsCard>
            </ItemsCard>
          </Card>
          <SearchButton onClick={handleSeeRepositories}>
            Ver Repositórios
          </SearchButton>
        </>
      )}
    </Container>
  );
};
