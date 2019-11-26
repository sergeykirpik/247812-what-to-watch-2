const FilmMapping = {
  "background_color": "backgroundColor",
  "background_image": "backgroundImage",
  "description": "description",
  "director": "director",
  "genre": "genre",
  "id": "id",
  "is_favorite": "isFavorite",
  "name": "title",
  "poster_image": "posterImage",
  "preview_image": "previewImage",
  "preview_video_link": "previewVideoLink",
  "rating": "rating",
  "released": "released",
  "run_time": "runTime",
  "scores_count": "scoresCount",
  "starring": "starring",
  "video_link": "videoLink",
};

const parse = (data, mapping) =>
  Object.entries(data).reduce((acc, [k, v]) =>
    Object.assign(acc, {
      [mapping[k]]: v
    }), {});

const parseArray = (data, mapping) =>
    data.map((el) => parse(el, mapping));

const SHOW_MORE_STEP = 8;

const initialState = {
  films: [],
  genreFilter: `All genres`,
  cardsShown: SHOW_MORE_STEP
};

export const ActionType = {
  SET_GENRE_FILTER: `SET_GENRE_FILTER`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`,
  GET_FILMS: `GET_FILMS`
};

export const ActionCreator = {
  setGenreFilter: (filter) => ({
    type: ActionType.SET_GENRE_FILTER,
    payload: filter
  }),

  showMoreCards: () => ({
    type: ActionType.SHOW_MORE_CARDS
  }),

  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
};

export const Operation = {
  getFilms:() => (dispatch, getState, api) => {
    api.get(`/films`).then(res => dispatch(ActionCreator.getFilms(parseArray(res.data, FilmMapping))));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.SET_GENRE_FILTER:
      return Object.assign({}, state, {
        genreFilter: action.payload,
        cardsShown: SHOW_MORE_STEP
      });
    case ActionType.SHOW_MORE_CARDS:
      return Object.assign({}, state, {
        cardsShown: state.cardsShown + SHOW_MORE_STEP
      });
    default:
      return state;
  }
};

export const selectFilmsByGenre = ({films, genreFilter}) => {
  if (!genreFilter) {
    debugger;
  }
  if (genreFilter.toUpperCase() === `ALL GENRES`) {
    return films;
  }
  return films.filter((film) => film.genreFilter.toUpperCase() === genre.toUpperCase());
};

export const getGenres = ({films}) => {
  return [`All genres`, ...new Set(films.map((it) => it.genre))];
};

export default reducer;
