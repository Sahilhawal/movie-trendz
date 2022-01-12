import React from "react";
import { render, screen } from "../../helpers/test-util";
import LandingPage from "./landingPage";
import { mockResponse } from "../../helpers/mockResponse";

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

describe("<MovieCard/>", () => {
  it("should display movie card when rendered with API response", async () => {
    render(<LandingPage />, { preloadedState: mockResponse });
    const movieTitle = await screen.getAllByTestId("movie-card")[0];
    expect(movieTitle).toBeInTheDocument();
  });

  it("should display placeholder text when no data is available", async () => {
    render(<LandingPage />);
    const placeholderText = await screen.getAllByText("No Movies Available")[0];
    expect(placeholderText).toBeInTheDocument();
  });

  it("should display pagination", async () => {
    render(<LandingPage />);
    const placeholderText = await screen.getAllByTestId(
      "pagination-container"
    )[0];
    expect(placeholderText).toBeInTheDocument();
  });
});
