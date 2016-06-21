(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(SelectedSong, $uibModal) {
      var vm = this;
      vm.selectedSong = SelectedSong[0];

      vm.openRegister = function () {
        $uibModal.open({
           animation: true,
           templateUrl: 'app/components/register/register.html',
           controller: 'RegisterController',
           controllerAs: 'rc'
        });
      };
  }
})();
