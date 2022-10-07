var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// connection to node and mysql
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "igapdb"
// })

app.use(express.json())
// For JSON Data
app.use(bodyParser.json({ limit: "50mb" }))
// For Form Data
app.use(bodyParser.urlencoded({ limit: "50mb", extended: "true" }));

app.get('/', (req, res) => {
    res.send("Hello World");
    res.end();
});

app.use("/user", require("./routes/user"));




app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});