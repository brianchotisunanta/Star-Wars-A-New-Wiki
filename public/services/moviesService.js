angular
  .module("wikiStarWars")
  .service("moviesService", function($http) {

//GET ALL MOVIES
    this.getMovies = function() {
      return $http.get("http://localhost:3000/movies")
    }

//POST (create; singular = movie)
    this.createMovie = function(movie) {
      return $http.post("http://localhost:3000/movies", {movie: movie})
    }

//GET (singular = movie) BC
    this.showMovie = function(movie) {
      return $http.get("http://localhost:3000/movies/" + movie.id)
    }

// PUT (singular = movie) BC
    this.updateMovie = function(movie) {
      return $http.put("http://localhost:3000/movies/" +  movie.id, {movie: movie})
    }

//DELETE (singular = movie) BC
    this.deleteMovie = function(movie) {
      return $http.delete("http://localhost:3000/movies/" + movie.id)   // params = / + movie.id
    }
  })
