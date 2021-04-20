const api = process.env.REACT_APP_API_URL;

export function me() {
  return fetch(`${api}/api/user/me`).then((response) => response.json());
}

export function connect(login, password) {
  return fetch(`${api}/api/user`, {
    method: "POST",
    headers: { "content-type": "application-json", body: { login, password } },
  }).then((response) => response.json());
}
