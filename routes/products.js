const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
// middleware to catch error
const catchBadRoute = (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
  next();
};

router.get("/", (req, res) => {
  res.send(`<div>
    <h1>Add product</h1>
    <button onclick="location.href='/add-product'">Add</button>
  </div>`);
});
router.get("/add-product", (req, res) => {
  res.send(`<div>
    <form action='/product' method='post'>
    <label>product</label>
    <input type='text' name='product'/>
    <label>size</label>
    <input  type='number' name='size'/>
    <input type='submit' value='submit'/>
    </form>
  </div>`);
});

router.post("/product", (req, res) => {
  const product = req.body.product;
  const size = req.body.size;

  console.log(`Product: ${product}`);
  console.log(`Size: ${size}`);

  res.redirect("/");
});
router.use(catchBadRoute);
