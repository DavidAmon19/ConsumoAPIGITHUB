// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubUser } from "./components/GithubUser";
import { RepositoryPage } from "./components/RepositoryPage";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GithubUser />} />
        <Route path="/repositories/:username" element={<RepositoryPage />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
