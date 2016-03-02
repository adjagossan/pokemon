var pokeController = angular.module('pokeController', []);

pokeController.controller('searchPokemon', ['$scope', '$log', '$http', '$templateCache', 'bridge',
    function($scope, $log, $http, $templateCache, bridge) {
        /* $scope.pokemonList = [
         {
         id: 1,
         name: 'bulbasaur'
         },
         {
         id: 2,
         name: 'ivysaur'
         },
         {
         id: 3,
         name: 'venusaur'
         },
         {
         id: 4,
         name: 'charmander'
         },
         {
         id: 54,
         name: 'psyduck'
         }
         ];*/
       
        $scope.getSelectedPokemon = function(){
            bridge.setId($scope.selectedPokemon);
        };
        
        $scope.$watch('pokemonId', function() {
           // bridge.setId($scope.pokemonId);
        });
         
        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v1/pokedex/1',
            cache: $templateCache
        }).then(function(response) {
            $scope.pokemonList = response.data.pokemon;
        }, function(response) {
            $log.log(response);
        });
    }]);
    
pokeController.controller('pokemonDetails', ['$scope','Pokemon', 'bridge', '$log', function($scope, Pokemon, bridge, $log) {
        
        //http://stackoverflow.com/questions/26800783/angularjs-watch-service-object
        $scope.$watch(function(){return bridge.getId();}, function() {
            $scope.data = Pokemon.get({pokemonId: bridge.getId()} , function(){
            $scope.pokemonImageLink = 'http://pokeapi.co/media/img/'+$scope.data.national_id+'.png';
            
        });
        }, true);
       
    }]);
