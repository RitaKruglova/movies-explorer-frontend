import { checkResponse } from "./utils";

const { REACT_APP_BACKEND_URL = 'http://localhost:3000'} = process.env;

export function register(name, email, password) {
  return fetch(`${REACT_APP_BACKEND_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password}),
    mode: 'cors',
    credentials: 'include'
  })
    .then(checkResponse)
    .then(res => res);
}

export function login(email, password) {
  return fetch(`${REACT_APP_BACKEND_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
    mode: 'cors',
    credentials: 'include'
  })
    .then(checkResponse)
    .then(res => res);
}

export function logout() {
  return fetch(`${REACT_APP_BACKEND_URL}/signout`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  });
}