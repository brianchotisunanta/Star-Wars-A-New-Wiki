var express = require('express');
var router = express.Router();

var charactersController = require("../controllers/characters-controller.js")

//GET www.blah.com/users
router.get('/', charactersController.index);      //callback function = charactersController.index

//POST www.blah.com/users
router.post('/', charactersController.create);    //callback functions = charactersController.create

//GET www.blah.com/users/:id
router.get('/:id', charactersController.show);    //callback functions = charactersController.show

//PUT www.blah.com/users/:id
router.put('/:id', charactersController.update);  //callback functions = charactersController.update

//DELETE www.blah.com/users/
router.delete('/:id', charactersController.destroy);    //callback functions = charactersController.destroy

module.exports = router;

//Everything here is good
