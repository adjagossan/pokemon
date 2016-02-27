var pokeApp = angular.module('pokedex', ['pokeController', 'pokeService']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

