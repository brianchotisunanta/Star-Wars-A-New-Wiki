angular
  .module("wikiStarWars")
  .controller("planetsController", function($scope, planetsService) {

    planetsService.getPlanets()
    .then(function(response){
      console.log(response.data.planets);
      $scope.planets = response.data.planets
    })

    var planetId = 10; // new planet.id will start at 10

    var Planet = function(id, name, image, description) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
    }

    $scope.name= ""
    $scope.image =""
    $scope.description = ""

//******************** functions ********************:

//Shows the Click to Submit Button:
  $scope.buttonFormField = true;  //ng-show
  $scope.planetForm = false;
  $scope.planetInfo = true;

  //Click to Submit Button (shows vehicle form field)
  $scope.planetSubmitButton = function() {
    $scope.buttonFormField = false; //ng-show
    $scope.planetForm = true; //ng-show
    $scope.planetInfo = true; //ng-hide
  }

    // Submit Planet
    $scope.submitPlanet = function() {
      planetsService.createPlanet(new Planet(
        planetId++,
        $scope.name,
        $scope.image,
        $scope.description
      )).then(function(response){
        $scope.planets = response.data.planets
      })

      $scope.name= "";
      $scope.image ="";
      $scope.description = "";

      $scope.planetForm = false;   //ng-show
      $scope.planetInfo = false;   //ng-hide
      $scope.buttonFormField = true;    //ng-show

      console.log($scope.planets);
    }

    // Hides the Planet Information form field:
    $scope.planetForm = false;    //ng-show
    $scope.planetInfo = false;    //ng-show


    // Edit Planet (Update)
    var currentPlanetId = null;
      $scope.submitButton = true;
      $scope.saveButton = false;

      // Update changes the button from Submit to Save
      $scope.updatePlanet = function(p) {

        currentPlanetId = p.id
          $scope.name = p.name;
          $scope.image = p.image;
          $scope.description = p.description;

        // hiding submit, showing save
        $scope.submitButton = false;
        $scope.saveButton = true;

        $scope.buttonFormField = false;   //ng-show
        //Hide the planet info when pressing Update button:
        $scope.planetInfo = true;   //ng-hide
        // Shows the Planet info fields:
        $scope.planetForm = true;   //ng-show
      }

  // Save button: (WORKING)
    $scope.savePlanet = function() {
      var planet = new Planet(
        currentPlanetId,
        $scope.name,
        $scope.image,
        $scope.description
      )

      planetsService.updatePlanet (planet)
        .then(function(response) {
          $scope.planets = response.data.planets
        })

      // hiding save, showing submit
      $scope.saveButton = false;
      $scope.submitButton = true;

      $scope.buttonFormField = true;
      //Shows the character info when pressing Save button:
      $scope.planetInfo = false;
      // Hides planet info field again:
      $scope.planetForm = false;

      //Clears the fields
      currentPlanetId = null;
      $scope.name = "";
      $scope.image= "";
      $scope.description = "";
    }

  // Delete button: (NOT WORKING)
    $scope.deletePlanet = function(planet) {
      planetsService.deletePlanet(planet)
        .then(function(response) {
          $scope.planets = response.data.planets
        })
    }
  })
