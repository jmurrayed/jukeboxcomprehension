(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, $log, $window, SelectedSong, $uibModal,
    loginService) {
    var vm = this;
    vm.selectedSong = SelectedSong[0];
    vm.videoType = 'lyric';
    // Public Functions...
    vm.getVideoLink = function() {
      if (vm.videoType == 'lyric') {
        return vm.selectedSong.lyricVideo;
      } else {
        return vm.selectedSong.musicVideo;
      }
    };

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

    vm.getFileUrl = function(filename) {
      $log.info(vm.selectedSong.fileUrl + filename);
      var storageRef = new firebase.storage()
        .ref(vm.selectedSong.fileUrl + filename);
      storageRef.getDownloadURL().then(function(url) {
        // $log.info("url -> " + url);
        $window.open(url, '_blank');
      });
    }
  }
})();
