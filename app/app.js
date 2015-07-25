/** AngularJS App Configuration **/
function AngularConfig($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });

    $routeProvider
        .when('/', {templateUrl: '/templates/page.html'})
        .otherwise({templateUrl: '/templates/page.html'})
    ;

}

AngularConfig.$inject = ['$routeProvider', '$locationProvider'];

/** Application Building **/
var app = angular.module('AngularApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
], AngularConfig);