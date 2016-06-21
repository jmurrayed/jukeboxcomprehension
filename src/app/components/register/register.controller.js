(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($uibModalInstance, $log) {
    var vm = this;
    vm.close = function () {
      $log.info("Close clicked");
      $uibModalInstance.dismiss('close');
    };
  }
})();
