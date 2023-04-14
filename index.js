import express from "express";
import session from 'express-session';
import bodyParser from "body-parser";
import flash from "connect-flash";
import path from "path";
import dotenv from "dotenv";
import homeRouter from "./routes/HomeRoute.js";
import categoryRouter from "./routes/CategoryRoute.js";
import productRouter from "./routes/ProductRoute.js";
import connectDb from "./config/connectDb.js";

dotenv.config();

connectDb();
const __dirname = path.resolve();

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());


app.set("view engine", "ejs");
app.set("views", "src/views");
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/css', express.static(__dirname + '/public/assets/scss'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));// redirect bootstrap
app.use('/jquery', express.static(__dirname + '/node_modules/jquery'));

// app.use(express.static(path.join(__dirname,"public")))

app.use(homeRouter);
app.use(categoryRouter);
app.use(productRouter);

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});