import Server from "./models/server";
import dotenv from "dotenv";

dotenv.config();
const serverInstance = new Server();

serverInstance.listen();

