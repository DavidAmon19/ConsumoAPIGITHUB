// RepositoryPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  PageContainer,
  Avatar,
  Title,
  RepositoriesList,
  BackButton,
} from "./styles";
import { CardRepositorioSimple } from "./styles";
import RepositoryCard from "./RepositoryCard";

export const RepositoryPage = () => {
  const { username } = useParams();
  const [userAvatar, setUserAvatar] = useState("");
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserAvatar(response.data.avatar_url);
      } catch (error) {
        console.log(`Erro ao buscar informações do usuário: ${error.message}`);
      }
    };

    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const topRepositories = response.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 10);
        setRepositories(topRepositories);
      } catch (error) {
        console.log(`Erro ao buscar repositórios: ${error.message}`);
      }
    };

    fetchUserData();
    fetchRepositories();
  }, [username]);

  return (
    <PageContainer>
      {userAvatar && <Avatar src={userAvatar} alt="Avatar" />}
      <Title>Repositórios:</Title>
      <RepositoriesList>
        {repositories.map((repo) => (
          // eslint-disable-next-line react/jsx-key
          <CardRepositorioSimple>
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <RepositoryCard key={repo.id} repo={repo} /> // Renderize o
            componente RepositoryCard para cada item na lista de repositórios
          </CardRepositorioSimple>
        ))}
      </RepositoriesList>
      <BackButton to="/">Voltar para Pesquisas</BackButton>
    </PageContainer>
  );
};
