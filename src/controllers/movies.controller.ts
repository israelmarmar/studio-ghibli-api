import { NextFunction, Request, Response } from 'express';
import { Movie } from '../interfaces/movies.interface';
import MovieService from '../services/movies.service';

class MoviesController {
  public movieService = new MovieService();

  public getMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const limit = Number(req.query.limit);
      const offset = Number(req.query.offset);
      const findAllMoviesData: Movie[] = await this.movieService.findAllMovie(limit,offset);

      res.status(200).json(findAllMoviesData);
    } catch (error) {
      next(error);
    }
  };

  public getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieId = req.params.id as string;
      const findOneMovieData: Movie = await this.movieService.findMovieById(movieId);

      res.status(200).json(findOneMovieData);
    } catch (error) {
      next(error);
    }
  };
}

export default MoviesController;
