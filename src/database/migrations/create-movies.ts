import { QueryInterface, DataTypes, Sequelize } from "sequelize";

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 * */
export async function up(query: QueryInterface) {
  try {
    return query.createTable("Movies", {
      id: {
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      original_title: {
        allowNull: false,
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
      },
      species: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      locations: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      vehicles: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },{
      engine: "InnoDB",
      charset: "utf8mb4"
      },
  );
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 * */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable("Movies");
  } catch (e) {
    return Promise.reject(e);
  }
}
