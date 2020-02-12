const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  return this.films.map((film) => {
    return film.title;
  });
}

Cinema.prototype.findFilmByTitle = function(title) {
  const found = this.films.find((film) => {
    return (film.title === title);
  });
  return found;
 }

Cinema.prototype.filterFilmsByGenre = function(genre) {
  return this.films.filter((film) => {
    return (film.genre === genre);
  });
}

Cinema.prototype.checkFilmYear = function(year) {
  return this.films.some((film) => {
    return (film.year === year);
  });
}

Cinema.prototype.thereAreNoFilmsFromThisYear = function(year) {
  return this.films.some((film) => {
    return (film.year === year);
  });
}

module.exports = Cinema;
