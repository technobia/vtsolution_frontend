/**
 * Created by apium on 01/08/2015.
 */

function AngularConfig($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });

    $routeProvider
        .when('/', {
            templateUrl: 'templates/index.html',
            controllerUrl: 'app/controllers/DashboardController'
        })
        .when('/products/list/:category', {
            templateUrl: 'templates/products/listProduct.html'
        })
        .otherwise({
            templateUrl: 'templates/index.html',
            controllerUrl: 'app/controllers/DashboardController'
        })
    ;

}

var app = angular.module('AngularApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
]);

app.config(AngularConfig);