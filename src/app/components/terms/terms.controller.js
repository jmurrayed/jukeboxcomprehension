(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('TermsController', TermsController);

  /** @ngInject */
  function TermsController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();
