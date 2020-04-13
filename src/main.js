const MOVIES_COUNT = 5;
const MOVIES_EXTRA_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createSiteMenuTemplate());
render(siteMainElement, createCatalogTemplate());

const moviesList = siteMainElement.querySelector(`.films-list`);
const moviesListAll = siteMainElement.querySelector(`.films-list__container`);
const moviesListExtra = siteMainElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < MOVIES_COUNT; i++) {
  render(moviesListAll, createMovieCardTemplate());
}
render(moviesList, createShowMoreButtonTemplate());

for (let i = 0; i < moviesListExtra.length; i++) {
  let extraFilmsContainer = moviesListExtra[i].querySelector(`.films-list__container`);
  for (let j = 0; j < MOVIES_EXTRA_COUNT; j++) {
    render(extraFilmsContainer, createMovieCardTemplate());
  }
}

render(siteMainElement, createMovieDetailsPopupTemplate());
