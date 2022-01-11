import React, { memo } from "react";
import { Card, Col } from "antd";
import PropTypes from "prop-types";
import "./movieCard.css";

const { Meta } = Card;

function MovieCard(props) {
  const { movie } = props;
  const { title, original_name, original_title, poster_path } = movie;
  return (
    <Col span={8}>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://dummyimage.com/240x360/adadad/000.jpg&text=No+Image+Available";
            }}
          />
        }
      >
        <Meta title={title || original_name || original_title} />
      </Card>
    </Col>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default memo(MovieCard);
