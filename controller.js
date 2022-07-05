const fs = require("fs");

const getAllFurniture = (req, res) => {
  fs.readFile("db.json", "utf8", function (err, data) {
    if (err) throw err;

    let parsedData = JSON.parse(data);
    console.log(parsedData);
    res.send(parsedData.furnitures);
  });
};
