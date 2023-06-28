const express = require("express");
const app = express();
const port = process.env.PORT || 5001
require("./config/database");
const bodyParser = require("body-parser")
const path = require("path");


// midddlewaresss

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true}))
app.use(express.static(path.resolve(__dirname, "./upload")));


app.use(require("./v1/routes/routes"));


// my Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));