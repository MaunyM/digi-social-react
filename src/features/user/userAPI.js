import _ from "lodash";

const api = process.env.REACT_APP_API_URL;
const Colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

export function me() {
  return fetch(`${api}/user/me`, {
    credentials: 'include',
  }).then((response) => response.json());
}

export function all() {
  return fetch(`${api}/user`, {
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((users) => users.map(withColor));
}

export function friends() {
  return fetch(`${api}/user/me/friend`, {
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((users) => users.map(withColor));
}

export function connect({ login, password }) {
  return fetch(`${api}/user/login`, {
    method: "POST",
    credentials: 'include',
    body: JSON.stringify({ login, password }),
    headers: { "content-type": "application/json" },
  })
    .then((response) => (response.ok ? response : Promise.reject()))
    .then((response) => response.json());
}

export function inscription({ login, password }) {
  return fetch(`${api}/user`, {
    method: "POST",
    credentials: 'include',
    body: JSON.stringify({ login, password }),
    headers: { "content-type": "application/json" },
  })
    .then((response) => (response.ok ? response : Promise.reject()))
    .then((response) => response.json());
}

const withColor = (user) => ({ ...user, color: _.sample(Colors) });
