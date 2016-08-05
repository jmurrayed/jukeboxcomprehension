(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $uibModalInstance, $log, loginService) {
    var vm = this;

    vm.login =  function (user) {
      return loginService.login(user)
        .then(function() {
          $uibModalInstance.close();
        })
        .catch(function(error) {
          $log.error("login failed "+error);
          vm.error = error;
        });
    };

    vm.logout = function () {
      loginService.logout();
      $uibModalInstance.close();
    };

    vm.close = function () {
      $uibModalInstance.close();
    };

    vm.isLoggedIn = function () {
      var res = loginService.isLoggedIn();
      if (res == null) {
        vm.userInfo = null;
        return false;
      } else {
        vm.userInfo = res;
        return true;
      }
    };

  }
})();
