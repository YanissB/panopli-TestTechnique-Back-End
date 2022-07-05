const fs = require("fs");

exports.getAllFurnitures = (req, res) => {
  fs.readFile("db.json", "utf8", function (err, data) {
    if (err) throw err;

    let parsedData = JSON.parse(data);
    res.send(parsedData.furnitures);
  });
};

exports.getFurnituresByColor = (req, res) => {
  fs.readFile("db.json", "utf8", function (err, data) {
    if (err) throw err;
    let parsedData = JSON.parse(data);
    res.send(parsedData.furnitures[0].color);
  });
};
