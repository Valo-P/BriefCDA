import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.listen(8082, () => {
    console.log('Server listening on port 8082');
});