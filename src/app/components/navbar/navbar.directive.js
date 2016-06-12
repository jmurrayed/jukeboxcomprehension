(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .directive('navbarHeader', navbarHeader);

  /** @ngInject */
  function navbarHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'nc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($uibModal) {
      var vm = this;
      vm.openLoginForm = function () {
        $uibModal.open({
           animation: true,
           templateUrl: 'app/components/login/login.html',
           controller: 'LoginController',
           controllerAs: 'lc',
           resolve: {
             items: function () {
               return [];
             }
           }
        });
      };
    }
  }

})();
