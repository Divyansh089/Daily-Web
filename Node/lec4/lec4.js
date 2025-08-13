const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello, everyone!");
});

// 404 handler - must be last
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});
