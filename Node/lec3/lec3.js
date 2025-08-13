
const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello , i am divyansh patel");
});
app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
});

// get (method) : - get (ask), put(update all) , post(send data) , delete(remove content) , patch(update particular content)