import express from 'express';
import MoviesController from './controllers/movies.controller';

const routes = express.Router();
const moviesController = new MoviesController()

routes.get('/movies', moviesController.getMovies);
routes.get('/movies/:id', moviesController.getMovieById);


export default routes;