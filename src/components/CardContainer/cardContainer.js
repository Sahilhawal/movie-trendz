import React from "react";
import { Pagination, Row, Col } from "antd";
import MovieCard from "../MovieCard/movieCard";
import "./cardContainer.css";

function CardContainer(props) {
  const renderMovieCards = () => {
    console.log("props movies", props);
    return (
      props.movies &&
      props.movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))
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
