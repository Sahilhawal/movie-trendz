import React from "react";
import { render, screen } from "../../helpers/test-util";
import { mockResponse } from "../../helpers/mockResponse";
import "../../helpers/matchMedia.mock";
import LandingPage from "./landingPage";

describe("<LandingPage/>", () => {
  it("should display movie card when rendered with API response", async () => {
    render(<LandingPage />, { preloadedState: mockResponse });
    const movieTitle = await screen.getAllByTestId("movie-card")[0];
    expect(movieTitle).toBeInTheDocument();
  });
});
