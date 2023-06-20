const express = require("express");
const { register, login } = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/admin-login", (req, res) => {
  const { email, password } = req.body;
  if (email == "admin@gmail.com" && password == "1234") {
    return res.status(200).send("success");
  }
  return res.status(400).send("wrong credentials");
});

module.exports = router;
