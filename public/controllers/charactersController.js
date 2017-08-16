angular
  .module("wikiStarWars")
  .controller("charactersController", function($scope, charactersService) {

  charactersService.getCharacters()
  .then(function(response){

    console.log(response.data.characters);

    $scope.characters = response.data.characters
  })

// var characters = [];
  var characterId = 7;

  var Character = function (id, characterImage, name, gender, height, species, homeworld, weapon, vehicle, affliation, movieAppearances, characterDescription) {
    this.id = id;
    this.characterImage = characterImage;     //ADD the images
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.species = species;
    this.homeworld = homeworld;
    this.weapon = weapon;
    this.vehicle = vehicle;
    this.affliation = affliation;
    this.movieAppearances = movieAppearances;
    this.characterDescription = characterDescription;
}

  // $scope.characters = [];

  $scope.id = "";
  $scope.characterImage = "";     //ADD the images
  $scope.name = ""
  $scope.gender = "";
  $scope.height = "";
  $scope.species = "";
  $scope.homeworld = "";
  $scope.weapon = "";
  $scope.vehicle = "";
  $scope.affliation = "";
  $scope.movieAppearances = "";
  $scope.characterDescription = "";

// ******************** functions: ********************

// Shows the Click to Submit Button:
  $scope.buttonFormField = true;  //ng-show

//Click to Submit Button (shows character form field):
  $scope.showFormField = function() {
    $scope.buttonFormField = false;  //ng-show
    $scope.characterForm = true;  //ng-show
    $scope.characterInfo = true;   //ng-hide
  }


// Submit button: (Working)
  $scope.submitCharacter = function() {
    charactersService.createCharacter(new Character(
      characterId++,
      $scope.characterImage,
        $scope.name,
        $scope.gender,
        $scope.height,
        $scope.species,
        $scope.homeworld,
        $scope.weapon,
        $scope.vehicle,
        $scope.affliation,
        $scope.movieAppearances,
        $scope.characterDescription
    )).then(function(response){
      $scope.characters = response.data.characters
    })

// Clears the input fields
    $scope.id = "";
    $scope.characterImage = "";     //ADD the images
    $scope.name = ""
    $scope.gender = "";
    $scope.height = "";
    $scope.species = "";
    $scope.homeworld = "";
    $scope.weapon = "";
    $scope.vehicle = "";
    $scope.affliation = "";
    $scope.movieAppearances = "";
    $scope.characterDescription = "";

    // Hide Character form field:
    $scope.characterForm = false;   //ng-show
    // Characters Info Description shows:
    $scope.characterInfo = false;   //ng-hide
    //Click to Submit Button shows:
    $scope.buttonFormField = true;  //ng-show

    console.log($scope.characters);
  }


  //Hides the Character information form filed:
  $scope.characterForm = false;
  $scope.characterInfo = false;

  // Update (EDIT) button: (WORKING)
  var currentCharacterId = null;
    $scope.submitButton = true;
    $scope.saveButton = false;


    // Update changes the button from Submit to Save
    $scope.updateCharacter = function(c) {

      currentCharacterId = c.id
        $scope.characterImage = c.characterImage;
        $scope.name = c.name;
        $scope.gender = c.gender;
        $scope.height = c.height;
        $scope.species = c.species;
        $scope.homeworld = c.homeworld;
        $scope.weapon = c.weapon;
        $scope.vehicle = c.vehicle;
        $scope.affliation = c.affliation;
        $scope.movieAppearances = c.movieAppearances;
        $scope.characterDescription = c.characterDescription;

      // Hide submit, show save buttons:
      $scope.submitButton = false;
      $scope.saveButton = true;

      // Hide the Click to Submit Button:
      $scope.buttonFormField = false;  //ng-show

      //Hide the character info when pressing Update button:
      $scope.characterInfo = true;      //ng-hide
      // Shows the Character info fields:
      $scope.characterForm = true;   //ng-show
    }


// Save button: (WORKING)
    $scope.saveCharacter = function() {
      var character = new Character(
        currentCharacterId,
        $scope.characterImage,
        $scope.name,
        $scope.gender,
        $scope.height,
        $scope.species,
        $scope.homeworld,
        $scope.weapon,
        $scope.vehicle,
        $scope.affliation,
        $scope.movieAppearances,
        $scope.characterDescription
        )

        charactersService.updateCharacter (character)
          .then(function(response){
            $scope.characters = response.data.characters
          })

      // hiding save, showing submit
      $scope.submitButton = true;
      $scope.saveButton = false;

      // Shows the Click to Submit Button:
      $scope.buttonFormField = true;  //ng-show

      //Shows the character info when pressing Save button:
      $scope.characterInfo = false;   //ng-hide
      // Hides chracter info field again:
      $scope.characterForm = false;   //ng-show

      //Clears the fields
      currentCharacterId = null;
      $scope.characterImage = "";     //ADD the images
      $scope.name = ""
      $scope.gender = "";
      $scope.height = "";
      $scope.species = "";
      $scope.homeworld = "";
      $scope.weapon = "";
      $scope.vehicle = "";
      $scope.affliation = "";
      $scope.movieAppearances = "";
      $scope.characterDescription = "";
    } //end of saveCharacter()

// Delete button: (WORKING)
    $scope.deleteCharacter = function(character) {
      charactersService.deleteCharacter(character)
        .then(function(response) {
          $scope.characters = response.data.characters
        })
    }
})
