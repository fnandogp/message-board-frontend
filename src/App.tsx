import React from 'react';
import logo from './logo.svg';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Container, Logo } from './styles';
import AppMenu from './components/AppMenu';
import AppRoutes from './components/AppRouter';
import Alert from './components/Alert';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <AppMenu></AppMenu>
        <Logo src={logo} alt="logo"></Logo>
        <Alert />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
