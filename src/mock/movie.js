const generateMovie = () => {
  return {
    title: `The Dance of Life`,
    rating: Math.round(Math.random() * 10),
    year: `1929`,
    duration: `1h 55m`,
    genre: `Musical`,
    poster: `the-dance-of-life.jpg`,
    description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
    isFavorite: Math.random() > 0.5,
    isWatched: Math.random() > 0.5,
    isAddedToWatchlist: Math.random() > 0.5,
  };
};

const generateMovies = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovie);
};

export {generateMovie, generateMovies};
