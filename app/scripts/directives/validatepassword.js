'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:validatePassword
 * @description
 * # validatePassword
 */
angular.module('angularAppApp')
  .directive('validatePassword', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the validatePassword directive');
      }
    };
  });
