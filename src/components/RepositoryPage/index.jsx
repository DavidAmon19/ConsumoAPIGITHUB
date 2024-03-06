// RepositoryPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const RepositoryPage = () => {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories(response.data);
      } catch (error) {
        console.log(`Erro ao buscar repositórios: ${error.message}`);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h1>Repositórios de {username}</h1>
      <div>
        {repositories.map((repo) => (
          <div key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

