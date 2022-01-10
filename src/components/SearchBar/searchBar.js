import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";

function SearchBar(props) {
  return (
    <Row style={{ padding: "50px" }}>
      <Col span={24}>
        <Input
          style={{ width: "400px" }}
          defaultValue=""
          onChange={(e) => props.handlInputChange(e.target.value)}
        />
        <Button type="primary" onClick={props.handleSearchClick}>
          Search
        </Button>
      </Col>
    </Row>
  );
}

export default SearchBar;
