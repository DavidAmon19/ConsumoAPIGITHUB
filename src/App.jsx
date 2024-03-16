import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/index";
import { ResultUser } from './components/ResultUser/index';
import { RepositoryPage } from "./components/RepositoryPage/index";
import { NotFound } from './components/NotFound/index';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/usuario/:username" element={<ResultUser />} />
        <Route path="/repositories/:username" element={<RepositoryPage />} />
        <Route path="/usuario-nao-encontrado" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
