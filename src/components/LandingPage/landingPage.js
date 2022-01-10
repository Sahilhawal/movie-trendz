import React, { useState, useEffect } from "react";
import CardContainer from "../CardContainer/cardContainer";
import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/searchBar";
import { connect } from "react-redux";
import { moviesActions } from "../../redux/actions/movies.actions";

function LandingPage(props) {
  useEffect(() => {
    props.fetchMovies();
  }, []);

  const [searchValue, setSearchValue] = useState();

  const handlInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    props.fetchMovies(searchValue, 1);
  };
  console.log(props);

  return (
    <>
      <Navbar />
      <SearchBar
        fetchMovies={props.fetchMovies}
        handlInputChange={handlInputChange}
        handleSearchClick={handleSearchClick}
      />
      <CardContainer
        movies={props.movies.results}
        page={props.movies.page}
        totalPages={props.movies.total_pages}
        totalResults={props.movies.total_results}
        searchValue={searchValue}
        fetchMovies={props.fetchMovies}
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

export default LandingPageComponent;
