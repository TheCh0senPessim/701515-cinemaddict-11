const createCardInfoMarkup = (year, duration, genre) => {
  return (
    `<span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre}</span>`
  );
};

const createCardControlsMarkup = () => {
  return (
    `<button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>`
  );
};

export const createMovieCardTemplate = (movie) => {
  const {} = movie;

  const title = `The Dance of Life`;
  const rating = `8.3`;
  const year = `1929`;
  const duration = `1h 55m`;
  const genre = `Musical`;
  const poster = `the-dance-of-life.jpg`;
  const description = `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`;

  const cardControlsMarkup = createCardControlsMarkup();
  const cardInfoMarkup = createCardInfoMarkup(year, duration, genre);

  let commentsCount = 5;


  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        ${cardInfoMarkup}
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${commentsCount} comments</a>
      <form class="film-card__controls">
        ${cardControlsMarkup}
      </form>
    </article>`
  );
};
