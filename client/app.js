var forum_app = angular.module('forum_app', ['ngRoute', 'LocalStorageModule']);

  // Set up routing
  forum_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/users.html'
        })
        .when('/dashboard',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/users',{
            templateUrl: 'partials/users.html'
        })

        .otherwise({
          redirectTo: '/'
        });
    });