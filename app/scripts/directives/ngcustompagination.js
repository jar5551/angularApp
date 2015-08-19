'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:ngCustomPagination
 * @description
 * # ngCustomPagination
 */
angular.module('angularAppApp')
  .directive('ngCustomPagination', function () {
    return {
      template: '<ul class="pagination">'
      + '<li ng-curent-menu-item="/registration/step-1"><a href="#/registration/step-1">1</a></li>'
      + '<li ng-curent-menu-item="/registration/step-2"><a href="#/registration/step-2">2</a></li>'
      + '<li ng-curent-menu-item="/registration/step-3"><a href="#/registration/step-3">3</a></li>'
      + '</ul>'
    };
  });
