import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes/routes.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server running on http://localhost:3333");
});
