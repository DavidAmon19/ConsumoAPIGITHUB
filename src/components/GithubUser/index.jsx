import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Container } from "./styles";

export const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const buscarUsuarios = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);

      const reposResponse = await axios.get(response.data.repos_url);
      setUserData((prevUserData) => ({
        ...prevUserData,
        repos: reposResponse.data,
      }));
    } catch (error) {
      console.log(`Erro ao chamar comando: ${error.message}`);
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

  return (
    <Container>
      <Input
        type="text"
        placeholder="Digite o nome de usuário do GitHub"
        value={username}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {userData && (
        <Card>
          <img src={userData.avatar_url} alt="Avatar" />
          <h2>{userData.name}</h2>
          <p>Cidade: {userData.location}</p>
          <p>Seguidores: {userData.followers}</p>
          <p>Seguindo: {userData.following}</p>
          <h3>Repositórios:</h3>
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
      )}
    </Container>
  );
};
