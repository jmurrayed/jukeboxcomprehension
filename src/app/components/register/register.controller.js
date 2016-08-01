(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();
