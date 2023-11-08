import { useState } from "react";

// WIP: ReviewForm component
const ReviewForm = ({ submitReview }) => {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (review.length > 100) {
      setError("Review must be less than 100 characters.");
    } else {
      submitReview(review);
      setReview("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Review:
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        {error && <p>{error}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
