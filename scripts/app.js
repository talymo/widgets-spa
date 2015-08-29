var dashboard = angular.module('dashApp', ['ngResource', 'ngRoute']);

dashboard.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'templates/dashboard.html',
                controller: ''
            })
            .when('/users', {
                templateUrl: 'templates/users.html',
                controller: 'userCtrl'
            })
            .when('/users/:id', {
                templateUrl: 'templates/single-user.html',
                controller: 'userCtrl'
            })
            .when('/widgets', {
                templateUrl: 'templates/widgets.html',
                controller: 'widgetCtrl'
            })
            .when('/widgets/:id', {
                templateUrl: 'templates/single-widget.html',
                controller: 'widgetCtrl'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    }
]);