var app = angular.module("wikiStarWars", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "userController"
    })

    .state("characters", {
    url: "/characters",
    templateUrl: "./views/characters.html",
    controller: "charactersController"
    })

    .state("movies", {
    url: "/movies",
    templateUrl: "./views/movies.html",
    controller: "moviesController"
    })

    .state("planets", {
    url: "/planets",
    templateUrl: "./views/planets.html",
    controller: "planetsController"
    })

    .state("vehicles", {
    url: "/vehicles",
    templateUrl: "./views/vehicles.html",
    controller: "vehiclesController"
    })


})
