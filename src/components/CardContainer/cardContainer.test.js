import React from "react";
import { render, screen } from "../../helpers/test-util";
import { mockResponse } from "../../helpers/mockResponse";
import "../../helpers/matchMedia.mock";
import CardContainer from "./cardContainer";

describe("<CardContainer/>", () => {
  it("should display movie card when rendered with API response", async () => {
    const { results, page, total_pages, total_results } =
      mockResponse.moviesReducer;
    const fetchMovies = jest.fn();

    render(
      <CardContainer
        movies={results}
        page={page}
        totalPages={total_pages}
        totalResults={total_results}
        searchValue={""}
        fetchMovies={fetchMovies}
      />
    );
    const movieTitle = await screen.getAllByTestId("movie-card")[0];
    expect(movieTitle).toBeInTheDocument();
  });

  it("should display pagination", async () => {
    render(<CardContainer />);
    const placeholderText = await screen.getAllByTestId(
      "pagination-container"
    )[0];
    expect(placeholderText).toBeInTheDocument();
  });

  it("should display placeholder text when no data is available", async () => {
    render(<CardContainer />);
    const placeholderText = await screen.getAllByText("No Movies Available")[0];
    expect(placeholderText).toBeInTheDocument();
  });
});
