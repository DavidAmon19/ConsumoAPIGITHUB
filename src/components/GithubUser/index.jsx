import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Container, SearchButton, GithubIcon } from "./styles"; 
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "./styles";

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
      console.error(`Erro ao chamar comando: ${error.message}`);
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
      <div>
        
        <Input
          type="text"
          placeholder="Usuário do GitHub"
          value={username}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <SearchButton onClick={buscarUsuarios}>Buscar</SearchButton>
      {userNotFound && (
        <ErrorMessage>
          <img src="/src/assets/erro-de-pagina2.jpg" alt="Erro" />
          Usuário não encontrado
        </ErrorMessage>
      )}
      {userData && !userNotFound && (
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
      <footer style={footerStyle}>
        <img 
        src="https://cdn.iconscout.com/icon/free/png-256/free-github-brand-logo-47401.png" 
        alt="Footer Image"
        style={{ width: '80px'}} />
      </footer>        
    </Container>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px'
};