(function() {
  'use strict';

  describe('directive navbar', function() {
    var vm, el;

    beforeEach(module('jukeboxcomprehension'));
    beforeEach(inject(function($compile, $rootScope) {
      el = angular.element('<navbar-header></navbar-header>');
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
