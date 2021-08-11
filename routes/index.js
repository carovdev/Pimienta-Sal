var express = require('express');
var router = express.Router();
const {index,detalle} = require('../controllers/indexControllers')

/* GET home page. */
router.get('/',index);
router.get('/detalle/:id' , detalle)

module.exports = router;
