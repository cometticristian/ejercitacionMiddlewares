var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const adminMiddleware = require('../middlewares/adminMiddleware.js');

/* GET users listing. */
router.get('/',usersController.main);
router.get('/admin', adminMiddleware.ingreso, usersController.admin);



module.exports = router;
