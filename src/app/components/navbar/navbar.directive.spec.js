(function() {
  'use strict';

  describe('directive navbar', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('jukeboxcomprehension'));
    beforeEach(inject(function($compile, $rootScope) {
      timeInMs = new Date();
      timeInMs = timeInMs.setHours(timeInMs.getHours() - 24);

      el = angular.element('<acme-navbar creation-date="' + timeInMs + '"></acme-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;

    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
    });

  });
})();
