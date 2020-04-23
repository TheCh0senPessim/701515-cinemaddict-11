import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createUserRankTemplate} from "./components/user-rank.js";
import {createCatalogTemplate} from "./components/catalog.js";
import {createMovieCardTemplate} from "./components/movie-card.js";
import {createShowMoreButtonTemplate} from "./components/show-more-button.js";
// import {createMovieDetailsPopupTemplate} from "./components/movie-details.js";
import {generateMovies} from "./mock/movie.js";
import {generateFilters} from "./mock/filter.js";

const MOVIES_COUNT = 5;
const MOVIES_EXTRA_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const filters = generateFilters();
const movies = generateMovies(MOVIES_COUNT);

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createSiteMenuTemplate(filters));
render(siteMainElement, createCatalogTemplate());

const moviesList = siteMainElement.querySelector(`.films-list`);
const moviesListAll = siteMainElement.querySelector(`.films-list__container`);
const moviesListExtra = siteMainElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < movies.length; i++) {
  render(moviesListAll, createMovieCardTemplate(movies[i]));
}
render(moviesList, createShowMoreButtonTemplate());

for (let i = 0; i < moviesListExtra.length; i++) {
  let extraFilmsContainer = moviesListExtra[i].querySelector(`.films-list__container`);
  for (let j = 0; j < MOVIES_EXTRA_COUNT; j++) {
    render(extraFilmsContainer, createMovieCardTemplate());
  }
}

// render(siteMainElement, createMovieDetailsPopupTemplate());
