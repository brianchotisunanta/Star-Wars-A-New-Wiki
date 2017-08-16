var vehicleId = null;

var Vehicle = function(id, name, image, dimensions, description) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.dimensions = dimensions;
  this.description = description;
}

var vehicles = [];

vehicles.push(new Vehicle(vehicleId++, "X-WING STARFIGHTER", "./images/vehicles_images/X-Wing-Fighter.jpeg", "13.4m",
"The X-wing is a versatile Rebel Alliance starfighter that balances speed with firepower. Armed with four laser cannons and two proton torpedo launchers, the X-wing can take on anything the Empire throws at it. Nimble engines give the X-wing an edge during dogfights, and it can make long-range jumps with its hyperdrive and its astromech droid co-pilot. Luke Skywalker is famous for destroying the Death Star behind the controls of an X-wing."))

vehicles.push(new Vehicle(vehicleId++, "MILLENNIUM FALCON", "./images/vehicles_images/Millennium-Falcon.jpeg", "34.75m", "Despite her humble origins and shabby exterior, the Millennium Falcon has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, from Lando Calrissian and Han Solo to Gannis Ducain, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive – and downright illegal – levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca have spent years searching the galaxy for the vehicle they once called home."))

vehicles.push(new Vehicle(vehicleId++, "Tie Fighter", "./images/vehicles_images/TIE-Fighter.jpeg", "8.99m", "The TIE fighter was the unforgettable symbol of the Imperial fleet. Carried aboard Star Destroyers and battle stations, TIE fighters were single-pilot vehicles designed for fast-paced dogfights with Rebel X-wings and other starfighters. The iconic TIE fighter led to other models in the TIE family including the dagger-shaped TIE Interceptor and the explosive-laden TIE bomber. The terrifying roar of a TIE's engines would strike fear into the hearts of all enemies of the Empire."))

vehicles.push(new Vehicle(vehicleId++, "DEATH STAR", "./images/vehicles_images/Death-Star.jpeg", "unknown",
"The Death Star was the Empire’s ultimate weapon: a moon-sized space station with the ability to destroy an entire planet. But the Emperor and Imperial officers like Grand Moff Tarkin underestimated the tenacity of the Rebel Alliance, who refused to bow to this technological terror…"))


//***************** RESTful API Verb Functions: *****************

// GET (ALL Vehicles)
function index(req,res) {
  res.json({vehicles: vehicles})
}

// POST (One Vehicle)
function create(req,res) {
  vehicles.unshift(req.body.vehicle)
  res.json({vehicles: vehicles})
}

// GET (One Vehicle)
function show(req,res) {
  for (var i = 0; i < vehicles.length; i++) {
    if (vehicles[i].id == req.params.id) {
      res.json({vehicles: vehicles[i]})
    }
  }
}

// PUT (One Vehicle)
function update(req,res) {
  for (var i = 0; i < vehicles.length; i++) {
    if (req.body.vehicle.id == vehicles[i].id) {
      vehicles.splice(i, 1, req.body.vehicle)
      res.json({vehicles: vehicles})
    }
  }
}

// DELETE (One Vehicle)
function destroy(req,res) {
  for (var i = 0; i < vehicles.length; i++) {
    if (req.params.id == vehicles[i].id) {
      vehicles.splice(i,1)
      res.json({vehicles: vehicles})
    }
  }
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
