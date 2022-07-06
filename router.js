const express = require("express");
const router = express.Router();
const cors = require("cors");
const control = require("./controllers.js");

router.use(cors());

router.get("/furnitures", control.getAllFurnitures);
router.get("/furnitures/:colors", control.getFurnituresByColor);

module.exports = router;
