const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
const {
  getHome,
  getAllChats,
  getContact,
  getLogin,
  getSuccess,
  postMsg,
  postUser,
} = require("./controllers/products");

router.get("/", getHome);
router.get("/login", getLogin);

router.get("/all-chats", getAllChats);

router.post("/message", postMsg);

router.post("/user", postUser);

router.get("/contactUS", getContact);
router.get("/success", getSuccess);
module.exports = router;
