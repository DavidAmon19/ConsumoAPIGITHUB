import React from "react";
import { Card } from 'react-bootstrap';

const RepositoryCard = ({ repo }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Text>{repo.description}</Card.Text>
        <p>Estrelas: {repo.stargazers_count}</p>
      </Card.Body>
    </Card>
  );
};

export default RepositoryCard;
