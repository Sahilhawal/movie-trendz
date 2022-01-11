import React from "react";
import { Pagination, Row, Col } from "antd";
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

  return (
    <div className="site-card-wrapper">
      <Row gutter={[24, 24]}>{renderMovieCards()}</Row>
      <Row>
        <Col span={24}>
          <Pagination
            current={props.page}
            defaultPageSize={20}
            total={props.totalResults}
            onChange={(page) => {
              props.fetchMovies(props.searchValue, page);
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CardContainer;
