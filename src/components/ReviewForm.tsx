import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { submitReview } from "../api/movieApi";
import { getErrorMessage } from "../utils/errorUtils";

// WIP: ReviewForm component
const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (review.length > 100) {
      setError("Review must be less than 100 characters.");
    } else {
      try {
        await submitReview(review);
        setError("");
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setReview("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}

      <TextField
        label="Review"
        variant="standard"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        size="medium"
        color="success"
        sx={{ m: "1rem auto 0" }}
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

export default ReviewForm;
