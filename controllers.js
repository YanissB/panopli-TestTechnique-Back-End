const fs = require("fs");
const db = require("./db.json");

exports.getAllFurnitures = (req, res) => {
  res.send(db.furnitures);
};

exports.getFurnituresByColor = (req, res) => {
  let colors = req.params.colors;
  const dbFurnitures = db.furnitures;
  console.log("hello");
  result = [];
  for (let i = 0; i < dbFurnitures.length; i++) {
    let dbFurnituresColorsLen = Object.keys(dbFurnitures[i].colors).length;
    for (let j = 0; j < dbFurnituresColorsLen; j++) {
      if (db.furnitures[i].colors[j] === colors) {
        result.push(db.furnitures[i]);
      }
    }
  }

  res.send(result);
};

exports.getFurnituresByQuantity = (req, res) => {
  let quantity = parseInt(req.params.quantity);
  const dbFurnitures = db.furnitures;
  console.log(quantity);

  let result = [];

  for (let i = 0; i < dbFurnitures.length; i++) {
    if (db.furnitures[i].quantity > quantity) {
      result.push(db.furnitures[i]);
    }
  }

  res.send(result);
};
