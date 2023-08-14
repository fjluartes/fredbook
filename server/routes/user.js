const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const auth = require("../auth");

router.post("/register", async (req, res) => {
  const result = await UserController.register(req.body);
  res.send(result);
});

router.get("/", auth.verify, async (req, res) => {
  const user = auth.decode(req.headers.authorization);
  const userData = await UserController.get({ userId: user.id });
  res.send(userData);
});

router.post("/login", async (req, res) => {
  const result = await UserController.login(req.body);
  res.send(result);
});

module.exports = router;
