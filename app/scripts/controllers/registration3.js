'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:Registraion3Ctrl
 * @description
 * # Registraion3Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('Registration3Ctrl', ['$scope', '$location', 'user', 'mainService', function ($scope, $location, user, mainService) {
    $scope.user = user;

    var redirectToFirstStep = function () {
      $location.path('/registration/step-1');
    }

    var redirectToSecondStep = function () {
      $location.path('/registration/step-2');
    }

    var step_validation = function (user) {
      if(user.given_name != '' && user.last_name != '' && typeof user.given_name !== "undefined" && typeof user.last_name !== "undefined") {
        return true;
      }
      return false;
    }

    if(mainService.isObjectEmpty($scope.user)) {
      redirectToFirstStep();
    }
    else if($scope.user.given_name == '' || typeof $scope.user.given_name === 'undefined' || $scope.user.last_name == '' || typeof $scope.user.last_name === 'undefined') {
      redirectToSecondStep();
    }

    $scope.submit = function () {
      if(step_validation($scope.user)) {
        user.create($scope.user);
      }
      else {
        console.log('nieporawne dane.');
      }
    };
  }]);
