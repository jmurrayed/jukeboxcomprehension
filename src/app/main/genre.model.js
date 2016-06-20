'use strict';
(function () {

    /**
     * All info and methods related to a GENRE.
     * @ngInject
     */
    var GenreModel = function (GENRES) {

        var selectedGenre = GENRES['rock'];

        return {
            getGenreColour: getGenreColour,
            setGenre: setGenre,
            getGenre: getGenre,
            getGenres: getGenres,
            getGenreColourByKey: getGenreColourByKey
        };

        function getGenres() {
          return Object.keys(GENRES);
        }

        function setGenre(key) {
          selectedGenre = GENRES[key];
        }

        function getGenreColour() {
            return selectedGenre[0].colour;
        }

        function getGenreColourByKey(key) {
            return GENRES[key][0].colour;
        }

        function getGenre() {
            return selectedGenre;
        }
    };

    angular.module('jukeboxcomprehension').factory('GenreModel', GenreModel);

})();
