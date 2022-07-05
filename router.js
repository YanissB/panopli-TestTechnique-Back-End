const express = require("express");
const app = express();
const fs = require("fs");

app.get("/furnitures", function (req, res) {
  fs.readFile("db.json", "utf8", function (err, data) {
    if (err) throw err;
    let parsedData = JSON.parse(data);
    console.log(parsedData);
    res.send(parsedData.furnitures);
  });
});

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});
