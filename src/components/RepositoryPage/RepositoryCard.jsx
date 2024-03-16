import React from "react";
import { Card } from "react-bootstrap";
import { CardRepositorioSimple, CardRepositorio, CardIcon } from "./styles";

const RepositoryCard = ({ repo }) => {
  return (
    <CardRepositorioSimple>
      <CardRepositorio>
        <CardIcon>
          <h2>{repo.name}</h2>
          <box-icon type="logo" name="github"></box-icon>
        </CardIcon>
        <p>{repo.description}</p>
        <p>Estrelas: {repo.stargazers_count}</p>
      </CardRepositorio>
    </CardRepositorioSimple>
  );
};

export default RepositoryCard;
