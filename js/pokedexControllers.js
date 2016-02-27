var pokeController = angular.module('pokeController', []);
var pokemonId = 0;

pokeController.controller('searchPokemon', ['$scope', '$log', /*'$http', '$templateCache',*/'Pokemon',/*'$promise',*/
    function($scope, $log, /*$http, $templateCache,*/ Pokemon/*, $promise*/) {
        $scope.pokemonList = [
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
            }
        ];

        $scope.$watch('pokemonId', function(){
           pokemonId = $scope.pokemonId;
        });
        
        $scope.$watch('selectedPokemon', function(){
           pokemonId = $scope.selectedPokemon;
        });
        
        $scope.getSelectedPokemon = function() {
              var data = Pokemon.get({pokemonId : pokemonId}, function(){
                   $log.log(data.national_id+' '+data.name);
                   data.moves.forEach(function(move){
                      $log.log(move.name);
                  });
                       
              });
              
        }
        /*
        $scope.getSelectedPokemon = function() {
            $http({
                method: 'GET',
                url: $scope.urlgetPokemonByName,
                cache: $templateCache
            }).then(function(response) {
                $log.log(response);
            }, function(response) {
                $log.log(response);
            });
        };*/

    }]);

