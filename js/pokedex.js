var pokeApp = angular.module('pokedex', ['pokeDirective', 'pokeController', 'pokeService']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

