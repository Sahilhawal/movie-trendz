import React from "react";
import { render, screen } from "../../helpers/test-util";
import "../../helpers/matchMedia.mock";
import SearchBar from "./searchBar";

describe("<SearchBar/>", () => {
  it("should display search input on render", async () => {
    render(<SearchBar />);
    const searchInput = await screen.getAllByTestId("search-input")[0];
    expect(searchInput).toBeInTheDocument();
  });
});
