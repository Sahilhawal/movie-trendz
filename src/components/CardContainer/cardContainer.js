import React from "react";
import { Pagination, Row, Col } from "antd";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/movieCard";
import "./cardContainer.css";

function CardContainer(props) {
  const renderMovieCards = () => {
    return props?.movies?.length > 0 ? (
      props.movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))
    ) : (
      <h1 className="placeholder-text">No Movies Available</h1>
    );
  };

  const { page, totalResults, searchValue, fetchMovies } = props;
  return (
    <div className="site-card-wrapper">
      <Row gutter={[24, 24]}>{renderMovieCards()}</Row>
      <Row>
        <Col span={24}>
          <Pagination
            current={page}
            defaultPageSize={20}
            total={totalResults}
            onChange={(pageNumber) => {
              fetchMovies(searchValue, pageNumber);
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

CardContainer.propTypes = {
  movies: PropTypes.object,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  searchValue: PropTypes.string,
  fetchMovies: PropTypes.func,
};

export default CardContainer;
