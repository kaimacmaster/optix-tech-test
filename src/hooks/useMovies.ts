// /src/hooks/useMovies.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMovieCompanies, getMovies, submitReview } from "../api/movieApi";
import { Movie, MovieCompany } from "../types/movieTypes";

const queryConfig = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 30 * 60 * 1000, // 30 minutes
  retry: 1,
};

const useMovies = () => {
  // Fetch movies using `useQuery`
  const moviesQuery = useQuery<Movie[], Error>({
    queryKey: ["todos"],
    queryFn: getMovies,
    ...queryConfig,
  });

  // Fetch movie companies using `useQuery`
  const movieCompaniesQuery = useQuery<MovieCompany[], Error>({
    queryKey: ["movieCompanies"],
    queryFn: getMovieCompanies,
    ...queryConfig,
  });

  // Use `useMutation` for submitting reviews
  const reviewMutation = useMutation<any, Error, string>({
    mutationFn: submitReview,
  });

  // You can create a function to call the mutation
  const submitMovieReview = (review: string) => {
    reviewMutation.mutate(review);
  };

  const movies = moviesQuery.data ?? [
    {
      id: "1",
      reviews: [6, 8, 7, 9, 8, 7, 8],
      title: "A long train ride",
      filmCompanyId: "1",
      cost: 1020,
      releaseYear: 2001,
    },
    {
      id: "2",
      reviews: [5, 7, 3, 4, 5, 6, 3],
      title: "Flowers on the meadow",
      filmCompanyId: "2",
      cost: 983,
      releaseYear: 1997,
    },
    {
      id: "3",
      reviews: [1, 4, 5, 2, 3, 1, 2],
      title: "Summer",
      filmCompanyId: "1",
      cost: 7346,
      releaseYear: 2015,
    },
    {
      id: "4",
      reviews: [6, 7, 4, 5, 6, 7, 3],
      title: "Back to the garden",
      filmCompanyId: "2",
      cost: 364,
      releaseYear: 2009,
    },
    {
      id: "5",
      reviews: [2, 1, 2, 1, 3, 2, 1],
      title: "Mr John Smith",
      filmCompanyId: "3",
      cost: 26456,
      releaseYear: 2021,
    },
  ];

  // TODO: use https://giddy-beret-cod.cyclic.app/movieCompanies
  const movieCompanies = movieCompaniesQuery.data ?? [
    { id: "1", name: "True Film Productions" },
    { id: "2", name: "Lazy Lemon Films" },
    { id: "3", name: "Good old TV" },
  ];

  const isLoading = moviesQuery.isLoading || movieCompaniesQuery.isLoading;
  const isFetching = moviesQuery.isFetching || movieCompaniesQuery.isFetching;

  return {
    movies,
    movieCompanies,
    loading: isLoading || isFetching,
    error:
      moviesQuery.error ?? movieCompaniesQuery.error ?? reviewMutation.error,
    submitMovieReview,
  };
};

export default useMovies;
