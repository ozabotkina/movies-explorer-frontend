export function filterMovies(movies, shortOn, phrase) {
  const foundMovies = shortOn
    ? movies.filter(
        (item) =>
          (item.nameRU.toLowerCase().includes(phrase.toLowerCase()) === true) &
          (item.duration <= 40)
      )
    : movies.filter(
        (item) =>
          item.nameRU.toLowerCase().includes(phrase.toLowerCase()) === true
      );

  return foundMovies;
}

// export function filterAllMovies(movies, phrase) {

// const allSuchMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(phrase.toLowerCase()) === true);
// return allSuchMovies}

// export function filterShortMovies(movies, phrase){
// const shortSuchMovies = movies.filter(
//   (item) =>
//     (item.nameRU.toLowerCase().includes(phrase.toLowerCase()) === true) & (item.duration <= 40))

// return shortSuchMovies}
