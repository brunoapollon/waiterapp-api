import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3333, () => {
      console.log('server is runnig on port 3333!');
    });

  })
  .catch((error) => {
    console.log('DB connection falied!', error);
  });
