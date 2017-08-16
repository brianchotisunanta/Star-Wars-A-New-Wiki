var planetId = null;

var Planet = function(id, name, image, description) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.description = description;
}

var planets = [];

// 10 planets:
planets.push(new Planet(planetId++, "Corusant", "./images/planet_images/Coruscant.jpeg", "A city-covered planet, Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture. It features towering skyscrapers, streams of speeder-filled air traffic, and inner levels that stretch far below the world’s surface. Coruscant was the seat of government for the Galactic Republic and the Empire that followed, and was the site of numerous historic events during the Clone Wars. It also housed the Jedi Temple and Archives, which hosted Jedi training and learning for over a thousand generations -- traditions that ended when the planet bore witness to Order 66.") )

planets.push(new Planet(planetId++, "Alderaan", "./images/planet_images/Alderaan.jpeg", "If ever one needed an example of the irredeemable evil that was the Empire, turn to the shattered remains of Alderaan. An influential world, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Antilles and Bail Organa. A peaceful world, Alderaan was bereft of weaponry in an era of galactic strife. It was not without spirit, however. Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of Rebel activity, and Grand Moff Tarkin targeted the beautiful world for reprisal as soon as the Death Star was operational. The massive primary weapon of the battle station obliterated Alderaan, leaving only a lifeless asteroid field behind.") )

planets.push(new Planet(planetId++, "Bespin", "./images/planet_images/Bespin.jpeg", "Secluded from galactic turmoil by its location in a little-visited sector of space, Bespin is an astrophysical rarity. An immense gas giant surrounded by a number of moons, the planet contains a band of habitable atmosphere among its endless clouds. In this stratum of life, enterprising prospectors have established floating mining complexes devoted to extracting valuable gasses from deep within the planet. The most well known of these ventures is the opulent Cloud City, formerly under the administration of Lando Calrissian. During the tail end of the Galactic Civil War, the Empire garrisoned Bespin and took over Cloud City, though the outpost and the planet enjoyed freedom after the defeat of the Emperor at the Battle of Endor.") )

planets.push(new Planet(planetId++, "Dagobah", "./images/planet_images/Dagobah.jpeg", "Home to Yoda during his final years, Dagobah was a swamp-covered planet strong with the Force -- a forgotten world where the wizened Jedi Master could escape the notice of Imperial forces. Characterized by its bog-like conditions and fetid wetlands, the murky and humid quagmire was undeveloped, with no signs of technology. Though it lacked civilization, the planet was teeming with life -- from its dense, jungle undergrowth to its diverse animal population. Home to a number of fairly common reptilian and amphibious creatures, Dagobah also boasted an indigenous population of much more massive -- and mysterious -- lifeforms. Surrounded by creatures generating the living Force, Yoda learned to connect with the deeper cosmic Force and waited for one who might bring about the return of the Jedi Order.") )

planets.push(new Planet(planetId++, "Endor", "./images/planet_images/Endor.jpeg", "Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. The lush, forest home of the Ewok species is the gravesite of Darth Vader and the Empire itself. It was here that the Rebel Alliance won its most crucial victory over the Galactic Empire.") )

planets.push(new Planet(planetId++, "Geonosis", "./images/planet_images/Geonosis.jpeg", "A harsh rocky world less than a parsec away from Tatooine, Geonosis is a ringed planet beyond the borders of the Galactic Republic. Its uninviting surface is made up of harsh, rocky desert, and the creatures that evolved on Geonosis are well equipped to survive in the brutal environment. The most advanced lifeform are the Geonosians, sentient insectoids that inhabit towering spire-hives. The Geonosians maintain large factories for the production of droids and weapons for the Separatist cause in the Clone Wars. After the Clone Wars, the Empire chose Geonosis as the construction site of the first Death Star, restricting travel to the system and sterilizing the planet’s surface.") )

planets.push(new Planet(planetId++, "Hoth", "./images/planet_images/Hoth.jpeg", "Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.") )

planets.push(new Planet(planetId++, "Kamino", "./images/planet_images/Kamino.jpeg", "Purged from the otherwise complete Jedi Archives is all evidence of the mysterious world of Kamino. A lonely world beyond the Outer Rim and just south of the Rishi Maze, few could have predicted that Kamino would become a key contributor to a massive shift in political power in the final days of the Republic. Kamino is a planet of endless oceans and storms. Few features mark its surface, save for massive stilt-mounted cities wherein reside the planet's natural inhabitants, the Kaminoans. From Tipoca City, the planet's Prime Minister rules. Lama Su closely monitored the operations of Kamino's most prized export: clones.") )

planets.push(new Planet(planetId++, "Naboo", "./images/planet_images/Naboo.jpeg", "An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.") )

planets.push(new Planet(planetId++, "Yavin 4", "./images/planet_images/Yavin.jpeg", "One of a number of moons orbiting the gas giant Yavin in the galaxy’s Outer Rim, Yavin 4 was a steamy world covered in jungle and forest. It was the location of the principal rebel base early in the Galactic Civil War, and the site from which the Rebellion launched the attack that destroyed the first Death Star – a confrontation known thereafter as the Battle of Yavin.") )


//***************** RESTful API Verb Functions: *****************
// GET (ALL Planets)
function index(req,res) {
  res.json({planets: planets})
}

//POST (One Planet)
function create(req,res) {

  console.log(req.body.planet);
  planets.unshift(req.body.planet)
  res.json({planets: planets})
}

//GET (One Planet)
function show(req,res) {
  for (var i = 0; i < planets.length; i++) {
    if (planets[i].id == req.params.id) {
      res.json({planets: planets[i]})
    }
  }
}

// PUT (One Planet)
function update(req,res) {
  for (var i = 0; i < planets.length; i++) {
    if(req.body.planet.id == planets[i].id) {
      planets.splice(i, 1, req.body.planet)
      res.json({planets: planets})
    }
  }
}

// DELETE (One Planet)
function destroy(req,res) {
  for (var i = 0; i < planets.length; i++) {
    if(req.params.id == planets[i].id) {
      planets.splice(i, 1)
      res.json({planets: planets})
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
