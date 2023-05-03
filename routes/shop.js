const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send(`<div>
    <h1>Add product</h1>
    <button onclick="location.href='/add-product'">Add</button>
  </div>`);
});

module.exports = router;
