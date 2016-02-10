'use strict';

/**
 * @ngdoc overview
 * @name homework5App
 * @description
 * # homework5App
 *
 * Main module of the application.
 */
angular
  .module('homework5App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/tutorial', {
        templateUrl: 'views/tutorial.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
