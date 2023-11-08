export const calculateAverage = (reviews: number[]) => {
  return reviews.reduce((acc, cur) => acc + cur, 0) / reviews.length;
};
