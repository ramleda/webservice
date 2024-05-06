/*
Author          : Adelmar Souza
Date            : 05/06/2024
Project Name    : webservice - OIT - job test
*/

//import dotenv configuration, express and define the route
require('dotenv').config();
const express = require('express')
const shearchMoviesRoutes = require('./routes/shearchMovieRoutes');
//solving cors
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());
app.use('/api/movies', shearchMoviesRoutes);

console.log('PORT: ' + PORT);

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`);
});