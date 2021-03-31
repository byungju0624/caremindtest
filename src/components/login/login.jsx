import React from 'react';

import AuthTemplate from '../auth/authtemplate';
import LoginForm from '../containers/auth/loginform';
const Login = (props) => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;
