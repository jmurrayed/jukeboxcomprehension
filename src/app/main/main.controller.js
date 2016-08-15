(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal, $routeParams, loginService) {
    var vm = this;

    vm.openContact = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'cc'
      });
    };

    vm.openTraining = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/metronomics/metronomics.html',
        controller: 'MetronomicsController',
        controllerAs: 'mc'
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

    vm.openPrivacy = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/privacy/privacy.html',
        controller: 'PrivacyController',
        controllerAs: 'pc'
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
