/*
Author          : Adelmar Souza
Date            : 05/06/2024
Project Name    : webservice - OIT - job test
Class Name      : searchMovies.js
*/

//import express and define the controller and route
const express = require('express');
const { searchMovies } = require('../controllers/movieController');
const router = express.Router();

//route to search
router.get('/search', searchMovies);

module.exports = router;

