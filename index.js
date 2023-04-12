import express from "express";
import path from "path";
import dotenv from "dotenv";
import homeRouter from "./routes/HomeRoute.js";
import connectDb from "./config/connectDb.js";

dotenv.config();

connectDb();
const __dirname = path.resolve();

const app = express();


app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname,"public")))

app.use(homeRouter);

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});