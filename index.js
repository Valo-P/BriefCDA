import express from "express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import homeRouter from "./routes/HomeRoute.js";
import categoryRouter from "./routes/CategoryRoute.js";
import connectDb from "./config/connectDb.js";

dotenv.config();

connectDb();
const __dirname = path.resolve();

const app = express();
app.use(bodyParser.json());


app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname,"public")))

app.use(homeRouter);
app.use(categoryRouter);

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});