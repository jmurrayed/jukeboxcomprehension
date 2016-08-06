(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($location, $uibModalInstance, loginService) {
    var vm = this;
    vm.close = function() {
      $uibModalInstance.close();
      return $location.path('/');
    };

    vm.logout = function() {
      loginService.logout();
      $uibModalInstance.close();
      return $location.path('/');
    };

  }
})();
