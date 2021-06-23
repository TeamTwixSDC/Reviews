// import { Pool } from 'pg';
// import config from './config';

// const db = new Pool(config);

// const getReviews = (req, res) => {
//   console.log('query sent')
//   db.query('SELECT * FROM reviews WHERE review_id = 27189', (error, result) => {
//     if (error) {
//       res.send(error);
//     }
//     res.status(200).json(result.rows);
//   });
// };

// export default {
//   getReviews,
// };
