import films from './mocks/films2';

const SHOW_MORE_STEP = 8;

const initialState = {
  genreFilter: `All genres`,
  filmsByGenre: films,
  cardsShown: SHOW_MORE_STEP
};

export const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`,
  SELECT_FILMS_BY_GENRE: `SELECT_FILMS_BY_GENRE`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`,
};

export const ActionCreator = {
  setGenreFilter: (filter) => ({
    type: ActionType.SET_GENRE_FILTER,
    payload: filter
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: selectFilmsByGenre(genre)
  }),
  showMoreCards: () => ({
    type: ActionType.SHOW_MORE_CARDS
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_FILTER:
      return Object.assign({}, state, {
        genreFilter: action.payload,
        cardsShown: SHOW_MORE_STEP
      });
    case ActionType.SELECT_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filmsByGenre: action.payload
      });
    case ActionType.SHOW_MORE_CARDS:
      return Object.assign({}, state, {
        cardsShown: state.cardsShown + SHOW_MORE_STEP
      });
    default:
      return state;
  }
};

const selectFilmsByGenre = (genre) => {
  if (genre.toUpperCase() === `ALL GENRES`) {
    return films;
  }
  return films.filter((film) => film.genre.toUpperCase() === genre.toUpperCase());
};

export default reducer;
