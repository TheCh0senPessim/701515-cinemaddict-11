const createFilterMarkup = (filter, isActive) => {
  return (`<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">Sort by ${filter}</a></li>`);
};

export const createSiteMenuTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it.name, i === 0)).join(`\n`);
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>

    <ul class="sort">
      ${filtersMarkup}
    </ul>`
  );
};
