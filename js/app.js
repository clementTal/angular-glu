'use strict';
angular.module('App', ['ngRoute', 'glu'])
    .config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider
            .when('/', {templateUrl: '/index.html',
                        controller: MainCtrl})
            .otherwise({redirectTo: 'index.html'});
    }])
    .config(['$locationProvider', function($locationProvider)
    {
        $locationProvider.html5Mode(true);
    }]);