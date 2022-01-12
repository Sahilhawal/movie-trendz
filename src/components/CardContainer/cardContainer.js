import React from "react";
import { Pagination, Row, Col } from "antd";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/movieCard";
import "./cardContainer.css";

function CardContainer(props) {
  const { page, totalResults, searchValue, fetchMovies } = props;

  const renderMovieCards = () => {
    return props?.movies?.length > 0 ? (
      props.movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))
    ) : (
      <h1 className="placeholder-text">No Movies Available</h1>
    );
  };

  return (
    <div className="site-card-wrapper">
      <Row gutter={[24, 24]}>{renderMovieCards()}</Row>
      <Row>
        <Col span={24}>
          <Pagination
            data-testid="pagination-container"
            current={page}
            pageSize={20}
            showSizeChanger={false}
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
  movies: PropTypes.array,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  searchValue: PropTypes.string,
  fetchMovies: PropTypes.func,
};

export default CardContainer;
