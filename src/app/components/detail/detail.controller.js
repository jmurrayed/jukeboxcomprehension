(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, $log, SelectedSong, $uibModal, loginService) {
      var vm = this;
      vm.selectedSong = SelectedSong[0];
      vm.fileUrl = undefined;
      getFileUrl();

      vm.openRegister = function () {
        $uibModal.open({
           animation: true,
           templateUrl: 'app/components/register/register.html',
           controller: 'RegisterController',
           controllerAs: 'rc'
        });
      };

      vm.isLoggedIn = function () {
        var res = loginService.isLoggedIn();
        if (res == null) {
          return false;
        } else {
          return true;
        }
      };

      function getFileUrl() {
        // use vm.selectedSong filename...
        var storageRef = new firebase.storage().ref("secure.txt");
        storageRef.getDownloadURL().then(function(url) {
          vm.fileUrl = url;
            $log.info("url -> "+url);
        });

        // storageRef.getDownloadURL()
        //   .then(function(url) {
        //     vm.downloadLink = url;
        //       $log.info(url);
        //   })
        //   .catch(function(error) {
        //     $log.error("download "+error);
        //     vm.error = error;
        //   });

        // // Create a reference to the file we want to download
        // var starsRef = storageRef.child('images/stars.jpg');
        // // Get the download URL
        // starsRef.getDownloadURL().then(function(url) {
        //   // Insert url into an <img> tag to "download"
        // }).catch(function(error) {
        //   switch (error.code) {
        //     case 'storage/object_not_found':
        //       // File doesn't exist
        //       break;
        //
        //     case 'storage/unauthorized':
        //       // User doesn't have permission to access the object
        //       break;
        //
        //     case 'storage/canceled':
        //       // User canceled the upload
        //       break;
        //
        //     ...
        //
        //     case 'storage/unknown':
        //       // Unknown error occurred, inspect the server response
        //       break;
        //   }
        // });
      }
  }
})();
