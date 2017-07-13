var express = require('express');
var router = express.Router();

var planetsController = require("../controllers/planets-controller.js")

//GET www.blah.com/users
router.get('/', planetsController.index);      //callback function = planetsController.index

//POST www.blah.com/users
router.post('/', planetsController.create);    //callback functions = planetsController.create

//GET www.blah.com/users/:id
router.get('/:id', planetsController.show);    //callback functions = planetsController.show

//PUT www.blah.com/users/:id
router.put('/:id', planetsController.update);  //callback functions = planetsController.update

//DELETE www.blah.com/users/
router.delete('/:id', planetsController.destroy);    //callback functions = planetsController.destroy

module.exports = router;

//Everything here is good
