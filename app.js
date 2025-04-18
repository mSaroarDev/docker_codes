
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.status(200).json("Hello Developer!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
