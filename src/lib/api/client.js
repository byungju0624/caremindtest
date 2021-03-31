import axios from 'axios';

const client = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
});

// client.defaults.baseURL = 'http://127.0.0.1:8080/swagger-ui.html';

// client.defaults.header.common['Authorization'] = 'Bearer a1b2c3d4';

// axios.intercepter.response.use((\response) => {
//   return response;
// },error=>{
//     return Promise.reject(error)
// });
export default client;
