var characterId = null;

var Character = function (id, characterImage, name, gender, height, species, homeworld, weapon, vehicle, affliation, movieAppearances, characterDescription) {
  this.id = id;
  this.characterImage = characterImage;     //ADD the images
  this.name = name;
  this.gender = gender;
  this.height = height;
  this.species = species;
  this.homeworld = homeworld;
  this.weapon = weapon;
  this.vehicle = vehicle;
  this.affliation = affliation;
  this.movieAppearances = movieAppearances;
  this.characterDescription = characterDescription;
}

var characters = [];

characters.push(new Character(characterId++, "./images/character_images/jarjarbinks.jpeg", "Jar Jar Binks", "Male", "1.96m", "Gungan", "Naboo", "Energy Ball (Booma), Electropole", "Gungan Bongo Submarine", "Gungan Grand Army, Galactic Republic", "Star Wars: Episode I The Phantom Menace, Star Wars: Episode II Attack of the Clones, Star Wars: Episode III Revenge of the Sith", "A clumsy, well-meaning Gungan outcast on Naboo, Jar Jar Binks struggled to prove his worth throughout his life. Putting his awkward past behind him, Jar Jar left the swamps of Naboo to enter the even murkier waters of Coruscant politics, becoming a representative for his people in the galactic capital. There, his best intentions and eagerness to serve were exploited by scheming Senators and others in positions of power."))

characters.push(new Character(characterId++, "./images/character_images/Luke Skywalker.jpeg", "Luke Skywalker", "Male", "1.72m", "Human", "Tatooine", "Lightsaber", "X-wing", "Rebel Alliance and Jedi Order", "Star Wars: Episode IV A New Hope, Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi, Star Wars: Episode III Revenge of the Sith", "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries."))

//This still works even though its white:
characters.push(new Character(characterId++, "./images/character_images/Leia.jpeg", "Leia Organa", "Female", "1.5m", "Human", "Alderaan", "Blaster Pistol", "Tantive IV", "Rebel Alliance, The Resistance, Galactic Senate, Alderaan Royal Family", "Star Wars: Episode IV A New Hope, Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi, Star Wars: Episode III Revenge of the Sith", "Princess Leia Organa was one of the Rebel Alliance’s greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy’s great heroes. But life under the New Republic has not been easy for Leia. Sidelined by a new generation of political leaders, and struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career have been accompanied by more personal losses." ))

characters.push(new Character(characterId++, "./images/character_images/Han Solo.jpg", "Han Solo", "Male", "1.8m", "Human", "Corellia", "Blaster Pistol", "Millennium Falcon", "Rebel Alliance", "Star Wars: Episode IV A New Hope, Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi", "Smuggler. Scoundrel. Hero. Han Solo, captain of the Millennium Falcon, was one of the great leaders of the Rebel Alliance. He and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. But after the Battle of Endor, Han would face difficult times in a galaxy plagued by chaos and uncertainty."))

characters.push(new Character(characterId++, "./images/character_images/Darth Vader.jpeg", "Darth Vader", "Male", "2.03m", "Human", "Death Star", "Lightsaber", "TIE Fighter", "Galactic Empire, Sith", "Star Wars: Episode IV A New Hope, Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi, Star Wars: Episode III Revenge of the Sith", "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…"))

characters.push(new Character(characterId++, "./images/character_images/darth sidious.jpeg", "Darth Sidious", "Male", "1.73m", "Human", "Death Star", "Lightsaber", "None", "Galactic Republic, Galactic Senate, Sith", "Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi, Star Wars: Episode I The Phantom Menace, Star Wars: Episode II Attack of the Clones, Star Wars: Episode III Revenge of the Sith", "Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace. He slowly manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- and eventually Emperor -- ruling the galaxy through fear and tyranny."))

characters.push(new Character(characterId++, "./images/character_images/Darth Maul.jpeg", "Darth Maul", "Male", "1.75m", "Dathomirian", "Dathomir", "Lightsaber", "Sith Speeder, Sith Infiltrator", "Sith", "Star Wars: Episode I The Phantom Menace", "A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind. He wielded an intimidating double-bladed lightsaber and fought with a menacing ferocity. Though he fell in battle against Obi-Wan Kenobi, the Zabrak from Dathomir would prove to be much harder to destroy than originally believed."))

characters.push(new Character(characterId++, "./images/character_images/Anakin-Skywalker.jpeg", "ANAKIN SKYWALKER", "Male", "1,8m", "Human", "Tatooine", "Lightsaber", "Delta-7 Jedi Starfighter", "Jedi Order", "Star Wars: Episode I The Phantom Menace, Star Wars: Episode II Attack of the Clones, Star Wars: Episode III Revenge of the Sith, Star Wars: Episode VI Return of the Jedi", "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force. A hero of the Clone Wars, Anakin was caring and compassionate, but also had a fear of loss that would prove to be his downfall." ))

characters.push(new Character(characterId++, "./images/character_images/Padme-Amidala.jpeg", "PADMÉ AMIDALA", "Female", "1.65m", "Human", "Naboo", "Unknown", "Naboo N-1 Starfighter, Naboo Royal Starship, Naboo Royal Cruiser", "Galactic Republic, Galactic Senate", "Star Wars: Episode I The Phantom Menace, Star Wars: Episode II Attack of the Clones, Star Wars: Episode III Revenge of the Sith", "Padmé Amidala was a courageous, hopeful leader, serving as Queen and then Senator of Naboo -- and was also handy with a blaster. Despite her ideals and all she did for the cause of peace, her secret, forbidden marriage to Jedi Anakin Skywalker would prove to have dire consequences for the galaxy."))

characters.push(new Character(characterId++, "./images/character_images/Qui-Gon-Jinn.jpeg", "QUI-GON JINN", "Male", "1.93m", "Human", "Unknown", "Lightsaber", "Unknown", "Jedi Order", "Star Wars: Episode I The Phantom Menace", "A venerable if maverick Jedi Master, Qui-Gon Jinn was a student of the living Force. Qui-Gon lived for the moment, espousing a philosophy of 'feel, don't think -- use your instincts.' On Tatooine, Qui-Gon discovered a young slave boy named Anakin Skywalker who was strong in the Force. Sensing the boy's potential, Qui-Gon liberated Anakin from slavery. The Jedi Master presented Anakin to the Jedi Council, but they deemed the boy too old to begin training and dangerously full of fear and anger. They refused to allow Qui-Gon to train Anakin, but rescinded their decision to fulfill Qui-Gon's dying wish."))

characters.push(new Character(characterId++, "./images/character_images/Yoda.jpeg", "YODA", "Male", "0.66m", "Unknown", "Unknown", "Lightsaber", "Yoda's Fighter", "Jedi Order", "Star Wars: Episode I The Phantom Menace, Star Wars: Episode II Attack of the Clones, Star Wars: Episode III Revenge of the Sith, Star Wars: Episode V The Empire Strikes Back, Star Wars: Episode VI Return of the Jedi", "Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality."))



//***************** RESTful API Verb Functions: *****************

//GET ALL CHARACTERS (read) (Action = index)
function index(req, res) {
  res.json({characters: characters})      // ( {key: value} )
}

//POST (create) (Action = create) (character NOT characters)
function create(req, res) {

  console.log(req.body);

  characters.unshift(req.body.character)
  res.json({characters: characters})
}

//GET (read) (Action = show) (character NOT characters)
function show(req, res) {
  for (var i = 0; i < characters.length; i++) {
    if (characters[i].id == req.params.id) {
      res.json({character: characters[i]})
    }
  }
}

//PUT (update)  (Action = update) (character NOT characters)
function update(req, res) {
  for (var i = 0; i < characters.length; i++) {
    if (req.body.character.id == characters[i].id) {
      characters.splice(i, 1, req.body.character)
      res.json( {characters: characters} )
    }
  }
}


//DELETE (destroy)  (Action = destroy) (character NOT characters)
function destroy(req, res){
  for (var i = 0; i < characters.length; i++) {
    if(req.params.id == characters[i].id) {
      characters.splice(i, 1)
      res.json({characters: characters})
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
