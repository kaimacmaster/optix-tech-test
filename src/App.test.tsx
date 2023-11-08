import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays the total number of movies", async () => {
  render(<App />);

  const totalMoviesElement = await screen.findByText(
    /Total movies displayed:/i
  );
  expect(totalMoviesElement).toBeInTheDocument();
});
