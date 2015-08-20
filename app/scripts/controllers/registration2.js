'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:Registraion2Ctrl
 * @description
 * # Registraion2Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('Registration2Ctrl', ['$scope', '$location', 'user', 'mainService', function ($scope, $location, user, mainService) {
    $scope.user = user;

    var step_validation = function (user) {
      if(mainService.isVarEmpty(user.given_name) || mainService.isVarEmpty(user.last_name)) {
        return false;
      }
      return true;
    }

    if(mainService.isObjectEmpty($scope.user) || mainService.isVarEmpty($scope.user.email) || mainService.isVarEmpty($scope.user.password)) {
      $location.path('/registration/step-1');
    }

    $scope.submit = function () {
      if(step_validation($scope.user)) {
        $location.path('/registration/step-3');
      }
      else {
        console.log('nieporawne dane.');
      }
    };
  }]);
