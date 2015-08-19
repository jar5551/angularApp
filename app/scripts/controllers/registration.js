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
    $scope.user = user;

    var step_validation = function (user) {
      if(user.email != '' && user.password != '' && typeof user.email !== "undefined" && typeof user.password !== "undefined") {
        return true;
      }
      return false;
    };

    $scope.submit = function () {
      if(step_validation($scope.user)) {
        $location.path('/registration/step-2');
      }
      else {
        console.log('nieporawne dane.');
      }
    };



  }]);
