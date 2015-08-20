'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('Registration1Ctrl', ['$scope', '$location', 'user', 'mainService', function ($scope, $location, user, mainService) {
    $scope.user = user;

    console.log($scope.user);

    var step_validation = function (user) {
      if(mainService.isVarEmpty(user.email) && mainService.isVarEmpty(user.password)) {
        return false;
      }
      return true;
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
