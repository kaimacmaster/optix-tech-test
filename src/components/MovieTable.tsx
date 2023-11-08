import { Movie, MovieCompany } from "../types/movieTypes";
import MovieRow from "./MovieRow";

type MovieTableProps = {
  movies: Movie[];
  selectMovie: any;
  movieCompanies: MovieCompany[];
};

const MovieTable = ({
  movies,
  selectMovie,
  movieCompanies,
}: MovieTableProps) => (
  <div>
    {movies.map((movie) => (
      <MovieRow
        key={movie.id}
        movie={movie}
        selectMovie={selectMovie}
        movieCompanies={movieCompanies}
      />
    ))}
  </div>
);

export default MovieTable;
