import env from "dotenv";
import config from "config";

// env.config({ path: "./config" });
env.config();
const db = config.get("db");

export default db;
