'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.user
 * @description
 * # user
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('user', function () {
    return {
      create: function(user) {
        alert('aaa');
        console.log(user);
      },
      reset: function() {
      }
    };
  });
