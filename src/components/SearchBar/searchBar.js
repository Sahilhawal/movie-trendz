import React from "react";
import { Input, Button, Row, Col } from "antd";
import PropTypes from "prop-types";
import "./searchBar.css";

function SearchBar(props) {
  const { handlInputChange, handleSearchClick } = props;
  return (
    <Row className="searchBarRow">
      <Col span={24}>
        <Input
          data-testid="search-input"
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

SearchBar.propTypes = {
  handlInputChange: PropTypes.func,
  handleSearchClick: PropTypes.func,
};

export default SearchBar;
