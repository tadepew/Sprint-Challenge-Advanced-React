import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug());
});

it("renders a div with players", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/players/i);
  expect(element).toBeInTheDocument();
});
