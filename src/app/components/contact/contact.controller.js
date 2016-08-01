(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('ContactController',ContactController);

  /** @ngInject */
  function ContactController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();
