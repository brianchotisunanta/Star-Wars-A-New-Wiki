angular
  .module("wikiStarWars")
  .service("charactersService", function($http) {

//GET ALL CHARACTERS
    this.getCharacters = function() {
      return $http.get("http://localhost:3000/characters")
    }

//POST (create; singular = character)
    this.createCharacter = function(character) {
      return $http.post("http://localhost:3000/characters", {character: character})
    }

//GET (singular = character) BC
    this.showCharacter = function(character) {
      return $http.get("http://localhost:3000/characters/" + character.id)
    }

// PUT (singular = character) BC
    this.updateCharacter = function(character) {
      return $http.put("http://localhost:3000/characters/" + character.id, {character: character})
    }

//DELETE (singular = character) BC
    this.deleteCharacter = function(character) {
      return $http.delete("http://localhost:3000/characters/" + character.id)
    }
  })
