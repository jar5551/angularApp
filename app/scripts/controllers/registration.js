'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('RegistrationCtrl', ['$scope', function ($scope) {

    $scope.user = {};

    $scope.register = function () {
    };

    $scope.submit = function () {
      $scope.register();
    };



  }]);
