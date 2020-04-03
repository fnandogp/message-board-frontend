import React from 'react';
import logo from './logo.png';
import Messages from './containers/Messages';
import './index.css';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <Messages></Messages>
    </Container>
  );
}

export default App;
