'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('RegistrationCtrl', ['$scope', '$location', 'user', function ($scope, $location, user) {


    console.log($scope.user);


    $location.path('/registration/step-1');

  }]);
