(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, $log, SelectedSong, $uibModal,
    loginService) {
    var vm = this;
    vm.selectedSong = SelectedSong[0];

    // Public Functions...

    vm.openRegister = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'rc'
      });
    };

    vm.isLoggedIn = function() {
      var res = loginService.isLoggedIn();
      if (res == null) {
        return false;
      } else {
        return true;
      }
    };

    // Private functions...

    vm.getFileUrl = function() {
      // use vm.selectedSong filename...
      var storageRef = new firebase.storage().ref("tasks.pdf");
      storageRef.getDownloadURL().then(function(url) {
        $log.info("url -> " + url);
        // vm.fileUrl = url;
        return url;
      });
    }
  }
})();
