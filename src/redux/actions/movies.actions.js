import { moviesConstants } from "../types/movies.types";
import { movieServices } from "../services/movies.services";
export const moviesActions = {
  fetchMovies,
};

function fetchMovies(searchBy = null, pageNumber = 1) {
  return (dispatch) => {
    dispatch(request());

    movieServices.fetchMovies(searchBy, pageNumber).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: moviesConstants.FETCH_MOVIES };
  }

  function success(payload, pageNumber) {
    return {
      type: moviesConstants.FETCH_MOVIES_SUCCESS,
      payload,
      meta: { pageNumber: pageNumber },
    };
  }

  function failure(error) {
    return { type: moviesConstants.FETCH_MOVIES_FAILURE, error };
  }
}
