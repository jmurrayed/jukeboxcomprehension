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
    function NavbarController() {
      // var vm = this;
      // var temp = $rootScope.$on('genreColour', function(event, args) {
      //   vm.colour = args;
      // });
    }
  }

})();
