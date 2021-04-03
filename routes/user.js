const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/register', (req, res) => {
  UserController.register(req.body).then(result => res.send(result));
});

router.get('/:id', (req, res) => {
  UserController.get({ userId: req.params.id }).then(user => res.send(user));
});

module.exports = router;
