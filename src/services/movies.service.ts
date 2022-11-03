import { MovieModel } from "../database/models/movies.model";
import { HttpException } from "../exceptions/HttpException";
import { Movie } from "../interfaces/movies.interface";
import { isEmpty } from "../utils/util";

class MovieService {
  public async findAllMovie(limit?: number, offset?: number): Promise<Movie[]> {
    const allMovie: Movie[] = await MovieModel.findAll({
      offset,
      limit,
      order: [
        ['release_date', 'ASC']
      ]
    });
    return allMovie;
  }

  public async findMovieById(movieId: string): Promise<Movie> {
    if (isEmpty(movieId)) throw new HttpException(400, "MovieId is empty");

    const findMovie: Movie = await MovieModel.findOne({where : {id: movieId} });
    if (!findMovie) throw new HttpException(409, "Movie doesn't exist");

    return findMovie;
  }
}

export default MovieService;
