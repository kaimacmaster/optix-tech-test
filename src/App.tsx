import {
  Box,
  CssBaseline,
  Divider,
  Modal,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { QueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import MovieTable from "./components/MovieTable";
import ReviewForm from "./components/ReviewForm";
import useMovies from "./hooks/useMovies";
import { Movie } from "./types/movieTypes";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const { movies, movieCompanies, loading, error } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderDarkMode: "2px solid #fff",
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Card sx={{ minWidth: 275, m: "2rem 0" }} color="background">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Movie Database
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Welcome to Movie database!
            </Typography>
            <Divider sx={{ mb: 1.5 }} />
            <MovieTable
              movies={movies}
              selectMovie={setSelectedMovie}
              movieCompanies={movieCompanies}
            />

            {movies.length > 0 && (
              <Typography
                variant="body2"
                color="text.disabled"
                data-testid="not-empty"
                sx={{ mt: 1.5 }}
              >
                Total movies displayed: {movies.length}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button size="small">Refresh Movies</Button>
          </CardActions>
        </Card>
      </Container>
      <Modal
        open={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedMovie && (
            <>
              <Typography>You have selected:</Typography>
              <Typography
                id="modal-modal-description"
                variant="h6"
                component="h2"
              >
                {selectedMovie.title}
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <ReviewForm />
            </>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default App;
