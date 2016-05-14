(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController(GENRES) {
    var vm = this;
    vm.genreKeys = Object.keys(GENRES);
    vm.selectedGenre = GENRES['pop'];

    vm.setGenre = function(key) {
      vm.selectedGenre = GENRES[key];
    };

  }
})();
