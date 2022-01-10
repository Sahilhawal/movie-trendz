import React from "react";
import { Card, Col } from "antd";
const { Meta } = Card;

function MovieCard() {
  return (
    <Col span={8}>
      <Card
        hoverable
        style={{ width: 240, margin: "auto" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
}

export default MovieCard;
