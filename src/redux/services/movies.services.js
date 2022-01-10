import { handleResponse } from "../helpers/handleResponse";

export const movieServices = {
  fetchMovies,
};

function fetchMovies(searchBy, pageNumber) {
  const apiURL = searchBy
    ? `https://api.themoviedb.org/3/search/movie?api_key=2a57e3232ec81704ea0ef6bb6b3c3143&query=${searchBy}&page=${pageNumber}`
    : `https://api.themoviedb.org/3/trending/all/day?api_key=2a57e3232ec81704ea0ef6bb6b3c3143&page=${pageNumber}`;
  return fetch(apiURL).then(handleResponse);
}
