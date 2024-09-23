var express = require("express");
var router = express.Router();

const authMiddkeWare = require("../MiddleWare/auth");

const {
  addToCart,
  removeFromCart,
  getUserCart,
} = require("../Controllers/cartController");

router.post("/add", authMiddkeWare, addToCart);
router.post("/remove", authMiddkeWare, removeFromCart);
router.post("/get", authMiddkeWare, getUserCart);

module.exports = router;
