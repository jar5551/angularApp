'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:Registraion2Ctrl
 * @description
 * # Registraion2Ctrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('Registraion2Ctrl', ['$scope', '$location', 'user', function ($scope, $location, user) {
    $scope.user = user;

    var isEmpty = function(obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }

    var step_validation = function (user) {
      if(user.given_name != '' && user.last_name != '' && typeof user.given_name !== "undefined" && typeof user.last_name !== "undefined") {
        return true;
      }
      return false;
    }

    if(isEmpty($scope.user)) {
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
