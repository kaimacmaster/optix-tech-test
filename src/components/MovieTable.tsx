import { DataGrid } from "@mui/x-data-grid";
import { Movie, MovieCompany } from "../types/movieTypes";
import { calculateAverage } from "../utils/calculateAverage";

type MovieTableProps = {
  movies: Movie[];
  movieCompanies: MovieCompany[];
  selectMovie: (movie: Movie) => void;
};

const MovieTable = ({
  movies,
  movieCompanies,
  selectMovie,
}: MovieTableProps) => {
  const rows = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    averageScore: calculateAverage(movie.reviews).toFixed(1),
    company: movieCompanies.find((c) => c.id === movie.filmCompanyId)?.name,
  }));

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "averageScore", headerName: "Average Score", width: 200 },
    { field: "company", headerName: "Company", width: 200 },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={(params) =>
          selectMovie(movies.find((m) => m.id === params.id))
        }
      />
    </div>
  );
};

export default MovieTable;
