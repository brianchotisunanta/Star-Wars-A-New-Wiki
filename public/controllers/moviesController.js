angular
  .module("wikiStarWars")
  .controller("moviesController", function($scope, moviesService) {

    moviesService.getMovies()
    .then(function(response){

      console.log(response.data.movies);

      $scope.movies = response.data.movies
    })

    var movieId = 6;

    var Movie = function(id, name, image, description) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
    }

    // $scope.movies = [];

    $scope.name = ""
    $scope.image = ""
    $scope.description = ""

// functions:
    // Submit Movie
    $scope.submitMovie = function() {
      // POST: createMovie() is in moviesService.js:
      moviesService.createMovie(new Movie(
        movieId++,
        $scope.name,
        $scope.image,
        $scope.description
      )).then(function(response){
        $scope.movies = response.data.movies
      })

      $scope.name= "";
      $scope.image ="";
      $scope.description = "";
    }

    // Edit Movie (Update) NOT WORKING
    var currentMovieId = null;
      $scope.submitButton = true;
      $scope.saveButton = false;

      // Update changes the button from Submit to Save
      $scope.updateMovie = function(m) {

        currentMovieId = m.id
        $scope.name = m.name;
        $scope.image = m.image;
        $scope.description = m.description;

        // hiding submit button, showing save button
        $scope.submitButton = false;
        $scope.saveButton = true;

        //Hide the Movie info when pressing Update button:
        $scope.movieInfoHide = true;
        // Shows the Movie info fields:
        $scope.movieFormHidden = true;
      }

    // Save button: (WORKING)
    $scope.saveMovie = function() {
      var movie = new Movie(
        currentMovieId,
        $scope.name,
        $scope.image,
        $scope.description
      )

      moviesService.updateMovie (movie)
        .then(function(response){
          $scope.movies = response.data.movies
        })

      // hiding save, showing submit
      $scope.submitButton = true;
      $scope.saveButton = false;

      //Shows the Movie info when pressing Save button:
      $scope.movieInfoHide = false;
      // Hides Movie info field again:
      $scope.movieFormHidden = false;

      //Clears the fields
      currentMovieId = null;
      $scope.name = "";
      $scope.image= "";
      $scope.description = "";
    }

  // Delete button:
    $scope.deleteMovie = function(movie) {
      moviesService.deleteMovie(movie)
        .then(function(response) {
          $scope.movies = response.data.movies
        })
    }
})
