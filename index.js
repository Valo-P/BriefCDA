import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname,"public")))
app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});