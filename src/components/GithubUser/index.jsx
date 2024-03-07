import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Container, SearchButton, ErrorMessage } from "./styles";
import { useNavigate } from "react-router-dom";

export const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate(); 

  const buscarUsuarios = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      setUserNotFound(false);

      const reposResponse = await axios.get(response.data.repos_url);
      setUserData((prevUserData) => ({
        ...prevUserData,
        repos: reposResponse.data,
      }));
    } catch (error) {
      console.log(`Erro ao chamar comando: ${error.message}`);
      setUserNotFound(true);
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      buscarUsuarios();
    }
  };

  const handleSeeRepositories = () => {
    if (userData) {
      navigate(`/repositories/${username}`); 
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Usuário do GitHub"
        value={username}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={buscarUsuarios}>Buscar</SearchButton>
      {userNotFound && <ErrorMessage>Usuário não encontrado</ErrorMessage>}
      {userData && !userNotFound && (
        <>
          <Card>
            <img src={userData.avatar_url} alt="Avatar" />
            <h2>{userData.name}</h2>
            <p>Cidade: {userData.location}</p>
            <p>Seguidores: {userData.followers}</p>
            <p>Seguindo: {userData.following}</p>
            <h3>Melhores Repositórios:</h3>
            <div>
              {userData.repos && (
                <ul>
                  {userData.repos.map((repo, index) => (
                    <li key={index}>{repo.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
          <SearchButton onClick={handleSeeRepositories}>
            Ver Repositórios
          </SearchButton>
        </>
      )}
    </Container>
  );
};
