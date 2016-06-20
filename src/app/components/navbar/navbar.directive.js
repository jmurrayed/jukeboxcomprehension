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
    function NavbarController($log, $rootScope, $uibModal, GenreModel) {
      var vm = this;
      vm.colour = GenreModel.getGenreColour();
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
      var temp = $rootScope.$on('genreColour', function(event, args) {
        vm.colour = args;
      });
      $log.info(temp);

    }
  }

})();
