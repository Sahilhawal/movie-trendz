import { handleResponse } from "../../helpers/handleResponse";

export const movieServices = {
  fetchMovies,
};

function fetchMovies(searchBy, pageNumber) {
  const apiURL = searchBy
    ? `${process.env.REACT_APP_API_URL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchBy}&page=${pageNumber}`
    : `${process.env.REACT_APP_API_URL}/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`;
  return fetch(apiURL).then(handleResponse);
}
