import React from "react";
import { render, screen } from "../../helpers/test-util";
import SearchBar from "./searchBar";

delete window.matchMedia;
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

describe("<SearchBar/>", () => {
  it("should display search input on render", async () => {
    render(<SearchBar />);
    const searchInput = await screen.getAllByTestId("search-input")[0];
    expect(searchInput).toBeInTheDocument();
  });
});
