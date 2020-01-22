import env from "dotenv";

const result = env.config();
if (result.error) {
  throw result.error;
}

export default {
  db: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
};
