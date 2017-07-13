angular
  .module("wikiStarWars")
  .service("planetsService", function($http) {

//GET ALL Planets
    this.getPlanets = function() {
      return $http.get("http://localhost:3000/planets")
    }

//POST (create; singular = planet)
    this.createPlanet = function(planet) {
      return $http.post("http://localhost:3000/planets", {planet: planet})
    }

//GET (singular = planet) BC
    this.showPlanet = function(planet) {
      return $http.get("http://localhost:3000/planets/" + planet.id)
    }

// PUT (singular = planet) BC
    this.updatePlanet = function(planet) {
      return $http.put("http://localhost:3000/planets/" + planet.id, {planet: planet})
    }

//DELETE (singular = planet) BC
    this.deletePlanet = function(planet) {
      return $http.delete("http://localhost:3000/planets/" + planet.id)
    }
  })
