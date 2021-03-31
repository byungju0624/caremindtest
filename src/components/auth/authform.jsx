import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../button/button';
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px soild ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.footer`
  margin-top:2rem;
  text-align: right;
  a{
      color: ${palette.gray[6]};
      text-decoration: underline;
      &:hover{
          color: ${palette.gray[9]}};
      }

  }
`;
const ButtonMaginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};
const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디를 입력하세요"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="한번 더 입력해주세요"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonMaginTop cyan fullWidth>
          {text}
        </ButtonMaginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};
export default AuthForm;
