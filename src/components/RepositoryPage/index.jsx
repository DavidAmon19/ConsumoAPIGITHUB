// RepositoryPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

const Avatar = styled.img`
  width: 100px; 
  height: 100px; 
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid #e5f01084;
`;

const Title = styled.h1`
  background-color: #e5f01084;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 20px;
`;

const RepositoriesList = styled.div`
  background-color: #e5f01084;
  padding: 15px;

  h2 {
    font-size: 18px;
  }

  p {
    color: #433db9;
    font-weight: bold;
    font-size:12px;
  }
`;

const BackButton = styled(Link)`
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
      <Title>Melhores repositórios:</Title>
      <RepositoriesList>
        {repositories.map((repo) => (
          <div key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <p>Estrelas: {repo.stargazers_count}</p>
          </div>
        ))}
      </RepositoriesList>
      <BackButton to="/">Voltar para Pesquisas</BackButton>
    </PageContainer>
  );
};
