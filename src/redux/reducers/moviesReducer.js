import { moviesConstants } from "../types/movies.types";
const initialState = {};

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case moviesConstants.FETCH_MOVIES: {
      return {
        ...state,
      };
    }
    case moviesConstants.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case moviesConstants.FETCH_MOVIES_FAILURE: {
      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
