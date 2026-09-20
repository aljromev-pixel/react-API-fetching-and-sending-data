import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the product catalog", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByRole("heading", { name: /everyday tech/i })).toBeInTheDocument();
});
