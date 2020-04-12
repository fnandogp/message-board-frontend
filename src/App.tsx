import React, { useEffect } from 'react';
import logo from './logo.svg';
import './index.css';
import { useHistory } from 'react-router-dom';
import { Container, Logo } from './styles';
import AppMenu from './components/AppMenu';
import AppRoutes from './components/AppRouter';
import Alert from './components/Alert';

const App: React.FunctionComponent = () => {
  const history = useHistory();

  useEffect(() => {
    console.log(history.location);
  }, [history.location]);

  return (
    <Container>
      <AppMenu></AppMenu>
      <Logo src={logo} alt="logo"></Logo>
      <AppRoutes></AppRoutes>
    </Container>
  );
};

export default App;
