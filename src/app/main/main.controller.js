(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal, $routeParams, loginService) {
    var vm = this;

    vm.date = new Date();

    vm.openContact = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'cc'
      });
    };

    vm.openTerms = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/terms/terms.html',
        controller: 'TermsController',
        controllerAs: 'tc'
      });
    };

    vm.openLogin = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'lc',
        resolve: {
          items: function() {
            return [];
          }
        }
      });
    };

    vm.openLogout = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/logout/logout.html',
        controller: 'LogoutController',
        controllerAs: 'logout'
      });
    };

    vm.isLoggedIn = function() {
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
