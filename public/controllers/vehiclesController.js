angular
  .module("wikiStarWars")
  .controller("vehiclesController", function($scope, vehiclesService) {

  vehiclesService.getVehicles()
  .then(function(response){
    console.log(response.data.vehicles)
    $scope.vehicles = response.data.vehicles
  })

  var vehicleId = 4 //new vehicle.id starts at 6

  var Vehicle = function(id, name, image, dimensions, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.dimensions = dimensions;
    this.description = description;
  }

  $scope.name = ""
  $scope.image = ""
  $scope.dimensions = ""
  $scope.description = ""

//********************** functions **********************

//Shows the Click to Submit Button:
  $scope.buttonFormField = true;  //ng-show

  //Click to Submit Button (shows vehicle form field)
  $scope.vehicleSubmitButton = function() {
    $scope.buttonFormField = false; //ng-show
    $scope.vehicleForm = true; //ng-show
    $scope.vehicleInfo = true; //ng-hide
  }

//Submit Vehicle
    $scope.submitVehicle = function() {
      vehiclesService.createVehicle(new Vehicle(
        vehicleId++,
        $scope.name,
        $scope.image,
        $scope.dimensions,
        $scope.description
      )).then(function(response){
        $scope.vehicles = response.data.vehicles
      })

      $scope.id = ""
      $scope.name = ""
      $scope.image = ""
      $scope.dimensions = ""
      $scope.description = ""

      $scope.vehicleForm = false;   //ng-show
      $scope.vehicleInfo = false;   //ng-hide
      $scope.buttonFormField = true;    //ng-show

      console.log($scope.vehicles);
    }


// Hides the Vehicle Information form field:
    $scope.vehicleForm = false;   //ng-show
    $scope.vehicleInfo = false;   //ng-show

// Edit Vehicle (WORKING)
    var currentVehicleId = null;

      $scope.submitButton = true;
      $scope.saveButton = false;

//Update changes the button from submit to save:
    $scope.updateVehicle = function(v) {

      currentVehicleId = v.id;
        $scope.name = v.name;
        $scope.image = v.image;
        $scope.dimensions = v.dimensions;
        $scope.description = v.description;

        //showing save, hiding submit:
        $scope.saveButton = true;
        $scope.submitButton = false;

        // Hide Click to Submit Button:
        $scope.buttonFormField = false;

        //Hide vehicle info when pressing Update:
        $scope.vehicleInfo = true;
        //Shows vehicle info fields:
        $scope.vehicleForm = true
    }

//Save button
    $scope.saveVehicle = function() {
      var vehicle = new Vehicle(
        currentVehicleId,
        $scope.name,
        $scope.image,
        $scope.dimensions,
        $scope.description
      )
      vehiclesService.updateVehicle (vehicle)
      .then(function(response){
        $scope.vehicles = response.data.vehicles
      })

      //showing the submit, hiding the save :
      $scope.saveButton = false;
      $scope.submitButton = true;


      $scope.buttonFormField = true;
      //Shows the vehicle info when pressing Save:
      $scope.vehicleInfo = false;
      //Hides vehicle info field again:
      $scope.vehicleForm = false;

      currentVehicleId = null;
      $scope.name = "";
      $scope.image = "";
      $scope.dimensions = "";
      $scope.description = "";
    }

//Delete button:
    $scope.deleteVehicle = function(vehicle) {
      vehiclesService.deleteVehicle(vehicle)
        .then(function(response) {
          $scope.vehicles = response.data.vehicles
        })
    }
  })
