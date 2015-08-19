'use strict';

describe('Controller: Registraion2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var Registraion2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Registraion2Ctrl = $controller('Registraion2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Registraion2Ctrl.awesomeThings.length).toBe(3);
  });
});
