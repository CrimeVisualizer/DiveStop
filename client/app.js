// This is the overall angular model that controls the different parts of the site,
// the logic for each part is kept in it's specific controller.

angular.module('divestop', [
  'divestop.map',
  'divestop.divesite',
  'divestop.users',
  'divestop.services',
  'divestop.search',
  'divestop.splash',
  'divestop.addsite',
  'ngRoute',
  'satellizer'
])

.config(function ($routeProvider, $httpProvider, $authProvider) {
  $routeProvider
    // home page will automatically point to the map
    .when('/', {
      templateUrl: '/map/map.html',
      controller: 'OurMapController'
    })
    .when('/signup', {
      templateUrl: '/users/signup.html',
      controller: 'userController'
    })
    .when('/login', {
      templateUrl: '/users/login.html',
      controller: 'userController'
    })
    .when('/profile', {
      templateUrl: '/users/profile.html',
      controller: 'userController'
    })
    .when('/settings', {
      templateUrl: '/users/settings.html',
      controller: 'userController'
    })
    .when('/bars', {
      templateUrl: '/divesite/divesite.html',
      controller: 'DiveSiteController'
    })
    .when('/bars/new', {
      templateUrl: '/add/add.html',
      controller: 'AddSiteController'
    })
    .otherwise('/add/add.html');

  // use satellizer for user authentication
  $authProvider.facebook({
    clientId: 'Facebook App ID'
  });

  $authProvider.google({
    clientId: 'Google Client ID'
  });

});

