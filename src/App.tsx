import React from 'react';
import logo from './logo.png';
import Router from './Router';
import './index.css';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <Router></Router>
    </Container>
  );
}

export default App;
