import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays the total number of movies", async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  // TODO:KM - add a wait for the data to load here, can't implement because URL is down

  // Now check for the total movies displayed text
  const totalMoviesElement = screen.queryByTestId("not-empty");
  expect(totalMoviesElement).toBeInTheDocument();
});
