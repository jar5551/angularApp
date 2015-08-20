'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.mainService
 * @description
 * # mainService
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('mainService', function () {
    return {
      isVarEmpty: function (v) {
        if(v == '' || typeof v === "undefined") {
          return true;
        }
        return false;
      },
      isObjectEmpty: function (obj) {
        for(var key in obj) {
          if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
      }
    };
  });
