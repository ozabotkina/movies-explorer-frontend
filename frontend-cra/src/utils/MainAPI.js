import { BASE_URL_MAIN, MOVIE_URL } from "./constants";

function checkAnswer(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (email, password, name) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      password: password,
      email: email,
      name: name,
    }),
  }).then((res) => {
    return checkAnswer(res);
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) => {
      return checkAnswer(res);
    })
    .then((data) => {
      return data;
    });
};

export const checkToken = () => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => {
      return checkAnswer(res);
    })
    .then((data) => {
      return data;
    });
};

export const signout = () => {
  return fetch(`${BASE_URL_MAIN}/signout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
  }).then((res) => {
    return checkAnswer(res);
  });
};

export const getCurrentUser = () => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkAnswer(res);
  });
};

export const updateUser = (name, email) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => {
    return checkAnswer(res);
  });
};

export const addMovie = (card) => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",

    body: JSON.stringify({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: MOVIE_URL + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: MOVIE_URL + card.image.url,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    }),
  })
    .then((res) => {
      return checkAnswer(res);
    })
    .then((data) => {
      return data;
    });
};

export const getMovies = () => {
  return fetch(`${BASE_URL_MAIN}/movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkAnswer(res);
  });
};

export const removeMovie = (cardId) => {
  return fetch(`${BASE_URL_MAIN}/movies/${cardId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return checkAnswer(res);
  });
};
