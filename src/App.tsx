import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppMenu from './components/AppMenu';
import AppRoutes from './components/AppRoutes';
import './index.css';
import logo from './logo.svg';
import { Container, Logo } from './styles';

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <ToastContainer
        closeButton={<span>&times;</span>}
        hideProgressBar={true}
        position="bottom-right"
      ></ToastContainer>
      <AppMenu></AppMenu>
      <Logo src={logo} alt="logo"></Logo>
      <AppRoutes></AppRoutes>
    </Container>
  );
};

export default App;
