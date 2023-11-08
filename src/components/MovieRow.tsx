import { Movie, MovieCompany } from "../types/movieTypes";
import { calculateAverage } from "../utils/calculateAverage";

type MovieRowProps = {
  movie: Movie;
  selectMovie: any;
  movieCompanies?: MovieCompany[];
};

const MovieRow = ({ movie, selectMovie, movieCompanies }: MovieRowProps) => {
  const averageScore = calculateAverage(movie.reviews).toFixed(1);
  const company =
    (movieCompanies &&
      movieCompanies.find((c: { id: any }) => c.id === movie.filmCompanyId)
        ?.name) ||
    "Unknown Company";

  return (
    <span onClick={() => selectMovie(movie)}>
      {movie.title} - {averageScore} - {company}
      <br />
    </span>
  );
};

export default MovieRow;
