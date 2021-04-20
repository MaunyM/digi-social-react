const api = process.env.REACT_APP_API_URL;

export function me(token) {
  return fetch(`${api}/user/me`, {
    headers: { authorization: `bearer ${token}` },
  }).then((response) => response.json());
}

export function connect({ login, password }) {
  return fetch(`${api}/user/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "content-type": "application/json" },
  })
  .then((response) => response.ok?response:Promise.reject())
  .then((response) => response.json())
}
