var movieId = null;

var Movie = function(id, name, image, description) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.description = description;
}

var movies = [];
//
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE I THE PHANTOM MENACE", "./images/movie_images/Ep1.jpeg", "Stranded on the desert planet Tatooine after rescuing young Queen Amidala from the impending invasion of Naboo, Jedi apprentice Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn discover nine-year-old Anakin Skywalker, a young slave unusually strong in the Force. Anakin wins a thrilling Podrace and with it his freedom as he leaves his home to be trained as a Jedi. The heroes return to Naboo where Anakin and the Queen face massive invasion forces while the two Jedi contend with a deadly foe named Darth Maul. Only then do they realize the invasion is merely the first step in a sinister scheme by the re-emergent forces of darkness known as the Sith.") )
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE II ATTACK OF THE CLONES", "./images/movie_images/Ep2.jpeg", "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.") )
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE III REVENGE OF THE SITH", "./images/movie_images/Ep3.jpeg", "Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice -- Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring -- the twin children born in secrecy who will grow up to become heroes.") )
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE IV A NEW HOPE", "./images/movie_images/Ep4.jpeg", "Nineteen years after the formation of the Empire, Luke Skywalker is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke's Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia from the clutches of the evil Empire. Although Obi-Wan sacrifices himself in a lightsaber duel with Darth Vader, his former apprentice, Luke proves that the Force is with him by destroying the Empire's dreaded Death Star.") )
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE V THE EMPIRE STRIKES BACK", "./images/movie_images/Ep5.jpeg", "After the destruction of the Death Star, Imperial forces continue to pursue the Rebels. After the Rebellion's defeat on the ice planet Hoth, Luke journeys to the planet Dagobah to train with Jedi Master Yoda, who has lived in hiding since the fall of the Republic. In an attempt to convert Luke to the dark side, Darth Vader lures young Skywalker into a trap in the Cloud City of Bespin. In the midst of a fierce lightsaber duel with the Sith Lord, Luke faces the startling revelation that the evil Vader is in fact his father, Anakin Skywalker.") )
  movies.push(new Movie(movieId++, "STAR WARS: EPISODE VI RETURN OF THE JEDI", "./images/movie_images/Ep6.jpeg", "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star while the Rebel fleet mounts a massive attack on the space station. Luke Skywalker confronts his father Darth Vader in a final climactic duel before the evil Emperor. In the last second, Vader makes a momentous choice: he destroys the Emperor and saves his son. The Empire is finally defeated, the Sith are destroyed, and Anakin Skywalker is thus redeemed. At long last, freedom is restored to the galaxy.") )


//***************** RESTful API Verb Functions: *****************

// GET ALL Movies
function index(req,res) {
  res.json({movies: movies})
}
// POST (create) (singular: movie)
function create(req,res) {

  console.log(req.body.movie);

  movies.unshift(req.body.movie)  //unshift adds to the start ; push adds to end
  console.log(req.body);
  res.json({movies: movies})
}

//GET (read) (singular: movie) BC
function show(req,res) {
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].id == req.params.id) {
      res.json({movie: movies[i]})
    }
  }
}

//PUT (update) (singular: movie) BC
function update(req,res) {
  // console.log(req.body);
  // console.log(req.params);
  for (var i = 0; i < movies.length; i++) {
    if(req.body.movie.id == movies[i].id) {
      movies.splice(i, 1, req.body.movie)
      res.json({movies: movies})
    }
  }
}

// DELETE (destroy) (singular: movie) BC
function destroy(req,res) {
  for (var i = 0; i < movies.length; i++) {
    if(req.params.id == movies[i].id) {
      movies.splice(i, 1)
      res.json({movies: movies})
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
