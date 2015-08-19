'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:customDirective
 * @description
 * # customDirective
 */
angular.module('angularAppApp')
  .directive('customDirective', function () {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });
