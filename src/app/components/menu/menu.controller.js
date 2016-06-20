(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, $rootScope, GENRES, GenreModel) {
    var vm = this;
    vm.genreKeys = GenreModel.getGenres();
    vm.genreColour = GenreModel.getGenreColour();
    vm.selectedGenre = GenreModel.getGenre();

    vm.setGenre = setGenre;
    vm.genreColourByKey = genreColourByKey;

    function setGenre(key) {
      GenreModel.setGenre(key);
      vm.selectedGenre = GenreModel.getGenre();
      vm.genreColour = GenreModel.getGenreColour();
      $rootScope.$broadcast('genreColour', vm.genreColour);
    }

    function genreColourByKey(key) {
      return GenreModel.getGenreColourByKey(key);
    }

  }
})();
