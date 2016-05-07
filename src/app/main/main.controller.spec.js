(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('jukeboxcomprehension'));
    beforeEach(inject(function(_$controller_) {
      // spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');

    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

  });
})();
