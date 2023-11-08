import { useCallback, useEffect, useState } from "react";
import { getMovieCompanies, getMovies } from "../api/movieApi";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [movieCompanies, setMovieCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const [movies, movieCompanies] = await Promise.all([
        getMovies(),
        getMovieCompanies(),
      ]);
      setMovies(movies);
      setMovieCompanies(movieCompanies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    movies,
    movieCompanies,
    loading,
    error,
    setMovies,
    setMovieCompanies,
  };
};

export default useMovies;
