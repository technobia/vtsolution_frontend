/**
 * Created by apium on 25/07/2015.
 */
"use strict";

/** AngularJS App Configuration **/
function AngularConfig($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });

    $routeProvider
        .when('/', {templateUrl: '/templates/index.html'})
        .otherwise({templateUrl: '/templates/index.html'})
    ;

}

AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

/** Application Building **/
var app = angular.module('AngularApp', [
        'ngRoute',
        'ui.bootstrap',
        'ui.bootstrap.tpls'
    ], AngularConfig);

app.manifest = {
    authors: [ 'binh.tran' ],
    version: 0.1,
    src: [
        'app/dashboard/DashboardController'
    ]
};