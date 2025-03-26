function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3)/3;
  return average >= 90 && average <= 100
  ? 'A'
    : average >= 80 && average <= 90
  ? 'B'
    : average >= 70 && average <= 80
  ? 'C'
    : average >= 60 && average <= 70
  ? 'D'
    : 'F'
};