import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("<Navbar/>", function () {
  it("should contain title text", function () {
    render(<Navbar />);
    const screenText = screen.getByText("Movie Trendz");
    expect(screenText).toBeInTheDocument();
  });
});
