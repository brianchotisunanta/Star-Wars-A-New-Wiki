angular
  .module("wikiStarWars")
  .controller("planetsController", function($scope, planetsService) {

    planetsService.getPlanets()
    .then(function(response){
      console.log(response.data.planets);
      $scope.planets = response.data.planets
    })

    var planetId = 10;

    var Planet = function(id, name, image, description) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.description = description;
    }

    $scope.name= ""
    $scope.image =""
    $scope.description = ""

// functions:
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
    }

    // Hides the Planet Information form field:
    $scope.planetFormHidden = false;


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

        //Hide the planet info when pressing Update button:
        $scope.planetInfoHide = true;
        // Shows the Planet info fields:
        $scope.planetFormHidden = true;
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
      $scope.submitButton = true;
      $scope.saveButton = false;

      //Shows the character info when pressing Save button:
      $scope.planetInfoHide = false;
      // Hides planet info field again:
      $scope.planetFormHidden = false;

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
