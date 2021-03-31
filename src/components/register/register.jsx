import React from 'react';

import AuthTemplate from '../auth/authtemplate';
import RegisterForm from '../containers/auth/registerform';
const Register = (props) => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Register;
