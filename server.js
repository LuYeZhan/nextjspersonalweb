const cors = require('cors');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/photos', require('./routes/index'));
  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('DB connection successful!');
    });

  const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
  });

  process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('Unhandled Rejection! Shutting down...');
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      console.log('🔥 Process terminated!');
    });
  });
});
