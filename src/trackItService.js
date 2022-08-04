import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';


function signUp(body) {
  const signUpAPI = `${BASE_URL}/auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function logIn(body) {
  const loginAPI = `${BASE_URL}/auth/login`;
  return axios.post(loginAPI, body);
}


export {signUp, logIn};