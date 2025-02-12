import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #C1C8CA;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #C1C8CA
  }
  p: {
    margin: 0;
  }
`;

export default function AppRoutes() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
