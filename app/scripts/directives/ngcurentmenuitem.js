'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:ngCurentMenuItem
 * @description
 * # ngCurentMenuItem
 */
angular.module('angularAppApp')
  .directive('ngCurentMenuItem', function ($location) {
    return {
      restrict: 'A',
      scope: {
        path: "@ngCurentMenuItem"
      },
      link: function(scope, element, attributes) {
        scope.$on('$locationChangeSuccess', function() {
          if ($location.path() === scope.path) {
            element.addClass('active');

          } else {
            element.removeClass('active');
          }
        });
      }
    };
  });
