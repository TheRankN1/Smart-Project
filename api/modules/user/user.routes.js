const express = require('express');
const router = express.Router();

const UserController = require('./user.controller');

router.get('/getUsers', UserController.getUsers);
router.get('/getUserById/:id' , UserController.getUserById)
router.delete('/deleteUsers/:id', UserController.deleteUsers);
module.exports = router;