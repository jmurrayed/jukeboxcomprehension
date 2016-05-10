(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    var genre = {
      'pop'  : [{id:1, image:'http://lorempixel.com/' + 601 + '/300', artist:'Michal Jackson', title:'Bad'},
                {id:2, image:'http://lorempixel.com/' + 602 + '/300', artist:'Sting', title:'Fields of Barley'}],
      'rock' : [{id:3, image:'http://lorempixel.com/' + 601 + '/300', artist:'Nickleback', title:'Rockstar'},
                {id:4, image:'http://lorempixel.com/' + 602 + '/300', artist:'Foo Fighters', title:'Breakout'}]
    };

    vm.genreKeys = Object.keys(genre);
    vm.creationDate = 1462648970556;
    vm.selectedGenre = genre['pop'];

    vm.setGenre = function(key) {
      vm.selectedGenre = genre[key];
    };

    // function addSlide() {
    //   var newWidth = 600 + slides.length + 1;
    //   slides.push({
    //     image: 'http://lorempixel.com/' + newWidth + '/300',
    //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
    //     id: currIndex++
    //   });
    // }

  }
})();
