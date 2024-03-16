// Página Home
import React, { useState } from "react";
import axios from "axios";
import { Container, Input, SearchButton } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const navigate = useNavigate();

  const buscarUsuarios = async () => {
    try {
      const token = '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';
  
      const config = {
        headers: {
          Authorization: `token ${token}`
        }
      };
  

      const response = await axios.get(`https://api.github.com/users/${username}`, config);
      setUserData(response.data);
      setUserNotFound(false);
  

      const reposResponse = await axios.get(response.data.repos_url, config);
      setUserRepos(reposResponse.data);
  

      navigate(`/usuario/${username}`, { state: { userData: response.data, userRepos: reposResponse.data } });
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
        <div>
          <p>Usuário não encontrado</p>
        </div>
      )}
    </Container>
  );
};
