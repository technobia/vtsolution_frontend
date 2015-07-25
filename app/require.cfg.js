/**
 * Created by apium on 25/07/2015.
 */
requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'lodash': '../node_modules/postal/node_modules/lodash/dist/lodash.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular': '../node_modules/angular/angular.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'postal': '../node_modules/postal/lib/postal.min',
        'q': '../node_modules/q/q',
        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
        'ui_bootstrap': '../node_modules/angular-bootstrap/ui-bootstrap.min',
        'ui_templates': '../node_modules/angular-bootstrap/ui-bootstrap-tpls.min'
    },

    'shim': {
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

        'postal': {
            exports: 'postal'
        },

        'bootstrap': {
            'deps': ['jquery']
        }
    },

    'deps': ['app', 'angular', 'angular-route', 'jquery', 'ui_bootstrap', 'ui_templates', 'q', 'postal'],
    'callback': function() {
        require(['app']);
    },

    // for requirejs compilation:
    'include': [
        'lodash', 'angular-route', 'angular', 'jquery', 'ui_bootstrap', 'ui_templates', 'postal', 'q',
        'dashboard/DashboardController',
        //CMVP-SCRIPT-PLACEHOLDER
        'app'
    ]
});
