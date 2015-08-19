'use strict';

describe('Directive: ngCurentMenuItem', function () {

  // load the directive's module
  beforeEach(module('angularAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-curent-menu-item></ng-curent-menu-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngCurentMenuItem directive');
  }));
});
