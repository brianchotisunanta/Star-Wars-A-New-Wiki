angular
  .module("wikiStarWars")
  .controller("moviesController", function($scope, moviesService) {

    moviesService.getMovies()
    .then(function(response){
      console.log(response.data.movies);
      $scope.movies = response.data.movies
    })

    var movieId = 6; //new movie.id will start at 6

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

// ******************** functions: ********************

  // Shows the Click to Submit Button:
    $scope.buttonFormField = true;  //ng-show

  //Click to Submit Button (shows character form field):
    $scope.showFormField = function() {
      $scope.buttonFormField = false;  //ng-show
      $scope.movieForm = true;  //ng-show
      $scope.movieInfo = true;   //ng-hide
    }

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

      // Movie form field hides:
      $scope.movieForm = false;   //ng-show
      // Movies Info Description shows:
      $scope.movieInfo = false;   //ng-hide
      //Click to Submit Button shows:
      $scope.buttonFormField = true;  //ng-show

      console.log($scope.movies);
    }

    // Hides the Movie Information form field:
    $scope.movieForm = false;  //ng-show
    $scope.movieInfo = false;    //ng-hide

    // Edit Movie (Update) WORKING
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

      // Hide the Click to Submit Button:
      $scope.buttonFormField = false;  //ng-show

      //Hide the Movie info when pressing Update button:
      $scope.movieInfo = true;      //ng-hide
      // Shows the Movie info fields:
      $scope.movieForm = true;    //ng-show
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

      // Shows the Click to Submit Button:
      $scope.buttonFormField = true;  //ng-show

      //Shows the Movie info when pressing Save button:
      $scope.movieInfo = false;   //ng-hide
      // Hides Movie info field again:
      $scope.movieForm = false;   //ng-show

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
