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
    vm.videoType = '';

    // Public Functions...
    vm.getVideoLink = function() {
      if (vm.videoType == 'lyric') {
        return vm.selectedSong.lyricVideo;
      } else if (vm.videoType == 'music') {
        return vm.selectedSong.musicVideo;
      } else {
        return identifyVideo();
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

    vm.trimBrackets = function(str) {
      var index = str.indexOf("(");
      if (index > 0) {
        return str.substring(0, index);
      } else {
        return str;
      }
    }

    // Private Functions
    function identifyVideo() {
      if (vm.selectedSong.musicVideo) {
        return vm.selectedSong.musicVideo;
      } else {
        return vm.selectedSong.lyricVideo;
      }
    }
  }
})();
