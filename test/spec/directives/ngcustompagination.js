'use strict';

describe('Directive: ngCustomPagination', function () {

  // load the directive's module
  beforeEach(module('angularAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-custom-pagination></ng-custom-pagination>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngCustomPagination directive');
  }));
});
