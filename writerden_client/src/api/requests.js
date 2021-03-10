const BASE_URL = "http://localhost:3000/api/v1"

export const Session = {
  create (params) {
    return fetch(`${BASE_URL}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then( res => res.json())
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      credentials: 'include',
      method: "DELETE",
    }).then((res) => res.json());
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: 'GET',
      credentials: 'include'
    }).then(res => res.json());
  },

  create(params) {
    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    }).then((res) => res.json())
  }
}

export const Post = {
  all() {
    return fetch(`${BASE_URL}/posts`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  one(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include",
    }).then((res) => res.json());
  },

  create(params) {
    return fetch(`${BASE_URL}/posts`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },

  update(id, params) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },

  destroy(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include",
      method: "DELETE",
    }).then((res) => res.json());
  },
};