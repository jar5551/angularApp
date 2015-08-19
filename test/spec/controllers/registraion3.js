'use strict';

describe('Controller: Registraion3Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var Registraion3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Registraion3Ctrl = $controller('Registraion3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Registraion3Ctrl.awesomeThings.length).toBe(3);
  });
});
