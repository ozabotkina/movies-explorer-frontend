import { BASE_URL_MOVIES } from "./constants";

class MoviesAPI {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getMovies = () => {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      // credentials: 'include',
      headers: this._headers,
    }).then((res) => {
      return this._checkAnswer(res);
    });
  };
}

export const moviesApi = new MoviesAPI({
  baseUrl: BASE_URL_MOVIES,
  headers: {
    "Content-Type": "application/json",
  },
});
