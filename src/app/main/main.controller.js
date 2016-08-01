(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal) {
    var vm = this;

    vm.openContact = function () {
      $uibModal.open({
         animation: true,
         templateUrl: 'app/components/contact/contact.html',
         controller: 'ContactController',
         controllerAs: 'cc'
      });
    };

    vm.openTerms = function () {
      $uibModal.open({
         animation: true,
         templateUrl: 'app/components/terms/terms.html',
         controller: 'TermsController',
         controllerAs: 'tc'
      });
    };

    vm.openPrivacy = function () {
      $uibModal.open({
         animation: true,
         templateUrl: 'app/components/privacy/privacy.html',
         controller: 'PrivacyController',
         controllerAs: 'pc'
      });
    };

  }
})();
