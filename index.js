const express = require("express");
const router = require("./router");

const app = express();

app.use(express.static(__dirname));
app.use(router);

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});
