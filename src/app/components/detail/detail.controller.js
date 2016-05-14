(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(SelectedSong) {
      var vm = this;
      vm.selectedSong = SelectedSong[0];
  }
})();
