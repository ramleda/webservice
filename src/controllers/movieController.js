/*
Author          : Adelmar Souza
Date            : 05/06/2024
Project Name    : webservice - OIT - job test
Class Name      : movieController.js
*/

//import axios object and define the token and url for TMDB
const axios = require('axios');

const API_TOKEN = process.env.TMDB_API_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWYzNjE1NTE5MTRlNTc4YmMwMDQ5NDRkNTRlYmQ4MyIsInN1YiI6IjY2MzkzZDJkODEzY2I2MDEyMTg5YjNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ik9dphMO37gsbMhI1B74O54XADnTx7myuXDfz7cOJlg';
console.log('TOKEN: ' + API_TOKEN)
const BASE_URL = 'https://api.themoviedb.org/3';

//Create API for search movies
exports.searchMovies = async (req, res) =>{
    const { query } = req.query;

    if(!query) {
        return res.status(400).json({message: "Plese inform the parameters!"});
    }

    try{
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                query: encodeURIComponent(query),
                language: 'en-US',
                page: 1,
                include_adult: false
            },
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`
            }
        });
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({ message: 'Error trying to get data from TMDb', error: error.message });
    }
}