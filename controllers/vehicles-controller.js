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

vehicles.push(new Vehicle(vehicleId++, "TIE FIGHTER", "./images/vehicles_images/TIE-Fighter.jpeg", "8.99m", "The TIE fighter was the unforgettable symbol of the Imperial fleet. Carried aboard Star Destroyers and battle stations, TIE fighters were single-pilot vehicles designed for fast-paced dogfights with Rebel X-wings and other starfighters. The iconic TIE fighter led to other models in the TIE family including the dagger-shaped TIE Interceptor and the explosive-laden TIE bomber. The terrifying roar of a TIE's engines would strike fear into the hearts of all enemies of the Empire."))

vehicles.push(new Vehicle(vehicleId++, "DEATH STAR", "./images/vehicles_images/Death-Star.jpeg", "unknown",
"The Death Star was the Empire’s ultimate weapon: a moon-sized space station with the ability to destroy an entire planet. But the Emperor and Imperial officers like Grand Moff Tarkin underestimated the tenacity of the Rebel Alliance, who refused to bow to this technological terror…"))

vehicles.push(new Vehicle(vehicleId++, "PODRACER", "./images/vehicles_images/Podracer.jpeg", "Multiple Sizes/Varies", "One-man vehicles featuring a cockpit placed behind two huge engines, used across the galaxy in deadly Podraces."))

vehicles.push(new Vehicle(vehicleId++, "SPEEDER BIKE", "./images/vehicles_images/Speeder-Bike.jpeg", "3.2m", "Speeder bikes are common sights throughout the galaxy, with manufacturers turning out both civilian and military models. One of the best-known speeder bikes is the Aratech 74-Z, which saw service during the Clone Wars and remained a mainstay of Imperial forces during the Galactic Civil War. All speeder bikes are capable of high-speed travel and require skill and fast reflexes."))

vehicles.push(new Vehicle(vehicleId++, "DEATH STAR II", "./images/vehicles_images/Death-Star-II.jpeg", "unknown", "Hoping to crush the Rebellion once and for all, the Empire began construction of a second dreaded Death Star near Endor. But the project ran behind schedule; Death Star II was only half-finished, and the Emperor himself visited to oversee its completion."))

vehicles.push(new Vehicle(vehicleId++, "DARTH VADER'S TIE FIGHTER", "./images/vehicles_images/vaders-tie-fighter.jpeg", "9.2m", "Darth Vader piloted this distinctive experimental TIE fighter above the first Death Star, using its blaster cannons and his uncanny abilities with the Force to blast Rebel starfighters into glittering fragments."))
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
