var express = require('express');
var router = express.Router();

var vehiclesController = require("../controllers/vehicles-controller.js")

//GET www.WHATEVER.com/users
router.get('/', vehiclesController.index);      //callback function = vehiclesController.index

//POST www.WHATEVER.com/users
router.post('/', vehiclesController.create);    //callback functions = vehiclesController.create

//GET www.WHATEVER.com/users/:id
router.get('/:id', vehiclesController.show);    //callback functions = vehiclesController.show

//PUT www.WHATEVER.com/users/:id
router.put('/:id', vehiclesController.update);  //callback functions = vehiclesController.update

//DELETE www.WHATEVER.com/users/
router.delete('/:id', vehiclesController.destroy);    //callback functions = vehiclesController.destroy

module.exports = router;

//Everything here is good
