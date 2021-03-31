import client from './client';

const config = { Headers: { 'x-access-token': 'token-value' } };
// 로그인
export const login = ({ username, password }) =>
  client.post('/api/login', { username, password }, config);

// 회원가입
export const register = ({ username, password }) =>
  client
    .post('/api/regist', { username, password }, config)
    .then(console.log(`username:${username}, password:${password}`));

// 로그인 상태 확인
export const check = () => client.get('/api/users', config);
