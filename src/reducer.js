import films from './mocks/films2';

const initialState = {
  genreFilter: `ALL GENRES`,
  filmsByGenre: films
};

export const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`,
  SELECT_FILMS_BY_GENRE: `SELECT_FILMS_BY_GENRE`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_FILTER:
      return Object.assign({}, state, {
        genreFilter: action.payload,
      });
    case ActionType.SELECT_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filmsByGenre: action.payload
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
