const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.get("/", (req, res) => {
    res.send("hello, everyone!");
});
app.get("/home", (req, res) => {
    res.render("index");
})

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});
