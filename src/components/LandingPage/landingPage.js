import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CardContainer from "../CardContainer/cardContainer";
import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import { moviesActions } from "../../redux/actions/movies.actions";

function LandingPage(props) {
  const { fetchMovies, movies } = props;
  const { results, page, total_pages, total_results } = movies;

  useEffect(() => {
    fetchMovies();
  }, []);

  const [searchValue, setSearchValue] = useState();

  const handlInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    fetchMovies(searchValue, 1);
  };

  return (
    <>
      <Navbar />
      <SearchBar
        fetchMovies={fetchMovies}
        handlInputChange={handlInputChange}
        handleSearchClick={handleSearchClick}
      />
      <CardContainer
        movies={results}
        page={page}
        totalPages={total_pages}
        totalResults={total_results}
        searchValue={searchValue}
        fetchMovies={fetchMovies}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  const { moviesReducer } = state;
  return {
    movies: moviesReducer,
  };
};

const actionCreators = {
  fetchMovies: moviesActions.fetchMovies,
};

const LandingPageComponent = connect(
  mapStateToProps,
  actionCreators
)(LandingPage);

LandingPage.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.object,
};
export default LandingPageComponent;
