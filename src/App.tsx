import React from 'react';
import logo from './logo.png';
import AppRouter from './AppRouter';
import './index.css';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <AppRouter></AppRouter>
    </Container>
  );
}

export default App;
