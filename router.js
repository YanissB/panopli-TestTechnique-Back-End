const express = require("express");
const router = express.Router();
const cors = require("cors");
const control = require("./controllers.js");

router.use(cors());

router.get("/furnitures", control.getAllFurnitures);
router.get("/furnitures/colors/:colors", control.getFurnituresByColor);
router.get("/furnitures/quantity/:quantity", control.getFurnituresByQuantity);
router.get(
  "/furnitures/dimensions/:dimensions",
  control.getFurnituresByDimensions
);

// POST Cart
// DELETE Cart

// POST COMMAND

module.exports = router;
