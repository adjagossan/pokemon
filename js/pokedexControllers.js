var pokeController = angular.module('pokeController', []);
var oldValue = "";

pokeController.controller('searchPokemon', ['$scope', '$log', '$http', '$templateCache', 'bridge',
    function ($scope, $log, $http, $templateCache, bridge) {
        bridge.setScope($scope);
        $scope.loading = true;
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
        $scope.onChange = function(pokemonId){
            $scope.loading = true;
            bridge.setId(pokemonId);
        };

        $scope.getSelectedPokemon = function(selectedPokemon){
            if(selectedPokemon !== undefined && oldValue !== selectedPokemon)
            {
                oldValue = selectedPokemon;
                $scope.loading = true;
                bridge.setId(selectedPokemon);
            }
        };

        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v1/pokedex/1',
            cache: $templateCache
        }).then(function (response) {
          $log.log(response);
            $scope.pokemonList = response.data.pokemon;
            $scope.loading = false;
        }, function (response) {
            $log.log(response);
            $scope.loading = false;
        });
    }]);

pokeController.controller('pokemonDetails', ['$scope', 'Pokemon', 'bridge', '$log', function ($scope, Pokemon, bridge, $log) {

        //http://stackoverflow.com/questions/26800783/angularjs-watch-service-object
        $scope.$watch(function () {
            return bridge.getId();
        }, function () {
            //if(bridge.getId() !== undefined)
            //{
                  Pokemon.get({pokemonId: bridge.getId()}, function (response) {
                      if (response.national_id !== undefined){
                          $scope.data = response;
                          $scope.data.info = '#' + $scope.data.national_id + ' ' + $scope.data.name;
                          $scope.data.pokemonImageLink = 'http://pokeapi.co/media/img/' + $scope.data.national_id + '.png';
                      }
                      else{
                        $scope.data = {};
                      }
                      bridge.getScope().loading = false;
                  },
                  function (response) {
                          $scope.data = {};
                          bridge.getScope().loading = false;
                  });
            //}
        }, true);

    }]);
