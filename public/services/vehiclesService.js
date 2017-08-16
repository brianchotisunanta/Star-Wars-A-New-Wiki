angular
  .module("wikiStarWars")
  .service("vehiclesService", function($http) {

//GET ALL CHARACTERS
    this.getVehicles = function() {
      return $http.get("http://localhost:3000/vehicles")
    }

//POST (create; singular = vehicle)
    this.createVehicle = function(vehicle) {
      return $http.post("http://localhost:3000/vehicles", {vehicle: vehicle})
    }

//GET (singular = vehicle) BC
    this.showVehicle = function(vehicle) {
      return $http.get("http://localhost:3000/vehicles/" + vehicle.id)
    }

// PUT (singular = vehicle) BC
    this.updateVehicle = function(vehicle) {
      return $http.put("http://localhost:3000/vehicles/" + vehicle.id, {vehicle: vehicle})
    }

//DELETE (singular = vehicle) BC
    this.deleteVehicle = function(vehicle) {
      return $http.delete("http://localhost:3000/vehicles/" + vehicle.id)
    }
  })
