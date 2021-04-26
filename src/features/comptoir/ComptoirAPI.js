const api = process.env.REACT_APP_API_URL;

export function create(comptoir) {
  return fetch(`${api}/comptoir`, {
    method: "POST",
    credentials: 'include',
    body: JSON.stringify(comptoir),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
}

export function myComptoir() {
  return fetch(`${api}/comptoir/mine`, {
    credentials: 'include',
  }).then((response) => response.json());
}
export function all() {
  return fetch(`${api}/comptoir`, {
    credentials: 'include',
  }).then((response) => response.json());
}

export function join(id) {
  return fetch(`${api}/comptoir/${id}`, {
    method: "PUT",
    credentials: 'include',
  }).then((response) => response.json());
}

export function leave(id) {
  return fetch(`${api}/comptoir/mine/leave`, {
    method: "PUT",
    credentials: 'include',
  }).then((response) => response.json());
}

export function createMessage(message) {
  return fetch(`${api}/comptoir/mine/message`, {
    method: "POST",
    credentials: 'include',
    body: JSON.stringify(message),
    headers: {
      "content-type": "application/json",
    },
  });
}
