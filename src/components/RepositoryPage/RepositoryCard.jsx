import React from "react";
import { Card } from "react-bootstrap";
import { CardRepositorioSimple, CardRepositorio } from "./styles";

const RepositoryCard = ({ repo }) => {
  return (
    <CardRepositorioSimple>
      <CardRepositorio>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>Estrelas: {repo.stargazers_count}</p>
      </CardRepositorio>
    </CardRepositorioSimple>
  );
};

export default RepositoryCard;
