import React from 'react';
import logo from './logo.png';
import AppRouter from './AppRouter';
import './index.css';
import { Container } from './styles';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <AppRouter></AppRouter>
      </Container>
    </Provider>
  );
}

export default App;
