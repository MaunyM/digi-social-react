const api = process.env.REACT_APP_API_URL;

export function create(token, comptoir) {
  return fetch(`${api}/comptoir`, {
    method: "POST",
    body: JSON.stringify(comptoir),
    headers: {
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((response) => response.json());
}

export function myComptoir(token) {
  return fetch(`${api}/comptoir/mine`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  }).then((response) => response.json());
}
export function all(token) {
  return fetch(`${api}/comptoir`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  }).then((response) => response.json());
}

export function join(token, id) {
  return fetch(`${api}/comptoir/${id}`, {
    method: "PUT",
    headers: {
      authorization: `bearer ${token}`,
    },
  }).then((response) => response.json());
}

export function leave(token, id) {
  return fetch(`${api}/comptoir/mine/leave`, {
    method: "PUT",
    headers: {
      authorization: `bearer ${token}`,
    },
  }).then((response) => response.json());
}

export function createMessage(token, message) {
  return fetch(`${api}/comptoir/mine/message`, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
}
