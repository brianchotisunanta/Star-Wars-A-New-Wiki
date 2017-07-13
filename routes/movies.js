var express = require('express');
var router = express.Router();

var moviesController = require("../controllers/movies-controller.js")

//GET www.blah.com/users
router.get('/', moviesController.index);      //callback function = moviesController.index

//POST www.blah.com/users
router.post('/', moviesController.create);    //callback functions = moviesController.create

//GET www.blah.com/users/:id
router.get('/:id', moviesController.show);    //callback functions = moviesController.show

//PUT www.blah.com/users/:id
router.put('/:id', moviesController.update);  //callback functions = moviesController.update

//DELETE www.blah.com/users/
router.delete('/:id', moviesController.destroy);    //callback functions = moviesController.destroy

module.exports = router;

//Everything here is good
