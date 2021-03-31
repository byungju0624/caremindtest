import React from 'react';
import './app.css';
import { Route } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  return (
    <>
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
    </>
  );
}

export default App;
