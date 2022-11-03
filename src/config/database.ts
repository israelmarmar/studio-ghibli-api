const dotenv = require("dotenv");
dotenv.config();
import { Sequelize } from "sequelize";

const databases = require("./config.json");
const { username, password, database, host, dialect } = databases[process.env.NODE_ENV];

console.log({ NODE_ENV: process.env.NODE_ENV, username, password, database, host, dialect })

export const db = new Sequelize(database, username, password, {
  dialect,
  host,
  dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8_general_ci',
  },
});
