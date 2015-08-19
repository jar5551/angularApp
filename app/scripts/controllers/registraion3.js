'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:Registraion3Ctrl
 * @description
 * # Registraion3Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('Registraion3Ctrl', ['$scope', '$location', 'user', function ($scope, $location, user) {
    $scope.user = user;

    var isEmpty = function (obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }

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

    if(isEmpty($scope.user)) {
      redirectToFirstStep();
    }
    else if($scope.user.given_name == '' || typeof $scope.user.given_name === 'undefined' || $scope.user.last_name == '' || typeof $scope.user.last_name === 'undefined') {
      redirectToSecondStep();
    }

    $scope.submit = function () {
      if(step_validation($scope.user)) {
        $location.path('/registration/step-final');
      }
      else {
        console.log('nieporawne dane.');
      }
    };
  }]);
