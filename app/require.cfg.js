/**
 * Created by apium on 25/07/2015.
 */
requirejs.config({
    'baseUrl': '/base',
    'paths': {
        'app': '../app/app',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular': '../node_modules/angular/angular.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
        'ui_bootstrap': '../node_modules/angular-bootstrap/ui-bootstrap.min',
        'ui_templates': '../node_modules/angular-bootstrap/ui-bootstrap-tpls.min'
    },

    'shim': {
        'app': {
            deps: [ 'angular',  'jquery'],
            exports: 'app'
        },

        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },

        'ui_bootstrap': {
            deps: [ 'angular' ],
            exports: 'ui_bootstrap'
        },

        'ui_templates': {
            deps: [ 'angular' ],
            exports: 'ui_templates'
        },

        'jquery': {
            exports: '$'
        },

        'bootstrap': {
            'deps': ['jquery']
        }
    },

    'deps': ['angular', 'angular-route', 'jquery', 'ui_bootstrap', 'ui_templates'],

    // for requirejs compilation:
    'include': [
        'angular', 'angular-route', 'jquery', 'ui_bootstrap', 'ui_templates',

        //load app
        'app',
        'dashboard/DashboardController'
    ]
});
