var pokeService = angular.module('pokeService', ['ngResource']);
var pokeApiUrl = "http://pokeapi.co/";
var urlGetPokemonById = pokeApiUrl + 'api/v1/pokemon/:pokemonId';

pokeService.factory('Pokemon', ['$resource', function($resource){
        return $resource(urlGetPokemonById, {pokemonId:'@id'});
}]);

pokeService.factory('bridge', [function(){
     var id = 0;
     var scope;

     var pokemon = {

         getId : function(){
            return id;
         },

         setId : function(pkid){
            id = pkid;
         },
         
         getScope : function(){
            return scope;
         },

         setScope : function(sc){
            scope = sc;
         }
      };
      return pokemon;
}]);
