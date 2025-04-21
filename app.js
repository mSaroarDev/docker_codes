
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.status(200).json("Hello Developer! 22");
});

app.listen(8000, () => {
    console.log("Server is running on port 3001");
});
