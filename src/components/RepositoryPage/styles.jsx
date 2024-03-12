import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    color: #fff;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 2px solid #e5f01084;
    border-radius: 5PX;
`;

export const Title = styled.h1`
    background-color: #e5f01084;
    padding: 8px;
    margin-bottom: 8px;
    font-size: 20px;
    border-radius: 5PX;
`;

export const RepositoriesList = styled.div`
    background-color: #e5f01084;
    padding: 15px;
    border-radius: 5PX;

    h2 {
    font-size: 18px;
    }

    p {
    color: #433db9;
    font-weight: bold;
    font-size: 12px;
    }
`;

export const BackButton = styled(Link)`
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
