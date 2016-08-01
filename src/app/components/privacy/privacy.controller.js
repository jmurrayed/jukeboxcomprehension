(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('PrivacyController', PrivacyController);

  /** @ngInject */
  function PrivacyController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();
