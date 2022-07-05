import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import routes from "./routes/routes";
import { Port } from "./types";

const app: Express = express();
const port: Port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, (): void => {
  console.log("Server running on http://localhost:3333");
});
