var pokeService = angular.module('pokeService', ['ngResource']);
var pokeApiUrl = "http://pokeapi.co/";
var urlGetPokemonById = pokeApiUrl + 'api/v1/pokemon/:pokemonId';
pokeService.factory('Pokemon', ['$resource', function($resource){
        return $resource(urlGetPokemonById, {pokemonId:'@id'});
}]);


