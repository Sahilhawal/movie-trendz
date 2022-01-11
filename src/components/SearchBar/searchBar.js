import React from "react";
import { Input, Button, Row, Col } from "antd";
import "./searchBar.css";

function SearchBar(props) {
  const { handlInputChange, handleSearchClick } = props;
  return (
    <Row className="searchBarRow">
      <Col span={24}>
        <Input
          defaultValue=""
          onChange={(e) => handlInputChange(e.target.value)}
        />
        <Button type="primary" onClick={handleSearchClick}>
          Search
        </Button>
      </Col>
    </Row>
  );
}

export default SearchBar;
