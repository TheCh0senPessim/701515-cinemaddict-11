const generateMovie = () => {
  return {};
};

const generateMovies = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovie);
};

export {generateMovie, generateMovies};
