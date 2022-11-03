import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from '../../config/database';
import { Movie } from '../../interfaces/movies.interface';

export class MovieModel extends Model implements Movie {
  public id: number;
  public title: string;
  public original_title: string;
  public original_title_romanised: string;
  public image: string;
  public movie_banner: string;
  public description: string;
  public director: string;
  public producer: string;
  public release_date: number;
  public running_time: number;
  public rt_score: number;
  public people: string[];
  public species: string[];
  public locations: string[];
  public vehicles: string[];
  public url: string[];

  public static prepareInit(sequelize: Sequelize) {
    this.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      original_title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      original_title_romanised: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      movie_banner: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      director: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      producer: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      release_date: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      running_time: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      rt_score: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      people: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      species: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      locations: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      vehicles: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      url: {
        allowNull: false,
        type: DataTypes.JSON,
      },
    },
    {
      tableName: 'Movies',
      timestamps: false,
      sequelize,
    },
  );
}

}

MovieModel.prepareInit(db);