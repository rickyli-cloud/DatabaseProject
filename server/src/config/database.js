const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

module.exports = {
  client: process.env.DB_CONNECTION || "postgresql",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  database: process.env.DB_DATABASE || "postgres",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "admin"
};
