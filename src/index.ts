/* eslint-disable no-console */
import express from 'express';
// import getReviews from '../queries';
import testEnvironmentVariable from '../settings';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: testEnvironmentVariable });
});

// app.get('/reviews', getReviews);

app.listen(port, () => console.log(`Running on port ${port}`));
