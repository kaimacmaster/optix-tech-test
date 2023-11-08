const getMovies = async () => {
  const response = await fetch("https://giddy-beret-cod.cyclic.app/movies");
  if (!response.ok) {
    throw new Error("Failed to fetch movies.");
  }
  return response.json();
};

const getMovieCompanies = async () => {
  const response = await fetch(
    "https://giddy-beret-cod.cyclic.app/movieCompanies"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie companies.");
  }
  return response.json();
};

const submitReview = async (review: string) => {
  const response = await fetch(
    "https://giddy-beret-cod.cyclic.app/submitReview",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to submit review.");
  }
  return response.json();
};

export { getMovieCompanies, getMovies, submitReview };
