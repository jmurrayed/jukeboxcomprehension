(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $uibModalInstance, $log) {
    var vm = this;
    vm.login =  function () {
      $log.info("login clicked");
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $log.info("Cancel clicked");
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
