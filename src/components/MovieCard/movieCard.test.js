import React from "react";
import { render, screen } from "../../helpers/test-util";
import MovieCard from "./movieCard";
import { mockResponse } from "../../helpers/mockResponse";

describe("<MovieCard/>", () => {
  it("should display movie card with an image tag", async () => {
    const { results } = mockResponse.moviesReducer;

    render(<MovieCard movie={results[0]} />);
    const movieTitle = await screen.getAllByTestId("card-cover-image")[0];
    expect(movieTitle).toBeInTheDocument();
  });

  it("should display movie card with movie title", async () => {
    const { results } = mockResponse.moviesReducer;

    render(<MovieCard movie={results[0]} />);
    const movieTitle = await screen.getAllByTestId("card-movie-title")[0];
    expect(movieTitle).toHaveTextContent("Spider-Man: No Way Home");
  });
});
