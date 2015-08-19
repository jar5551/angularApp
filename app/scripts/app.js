'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
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
      .when('/registration', {
        redirectTo: '/registration/step-1'
      })
      .when('/registration/step-1', {
        templateUrl: 'views/registration-1.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/registration/step-2', {
        templateUrl: 'views/registration-2.html',
        controller: 'Registraion2Ctrl',
        controllerAs: 'registration2'
      })
      .when('/registration/step-3', {
        templateUrl: 'views/registration-3.html',
        controller: 'Registraion3Ctrl',
        controllerAs: 'registration3'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
