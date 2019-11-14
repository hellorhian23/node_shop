const express = require("express");

const app = express();


app.use((req, res) => {
    res.json({
        msg: "successful"
    });
});





const port = 5000;


app.listen(port, console.log("server started"));