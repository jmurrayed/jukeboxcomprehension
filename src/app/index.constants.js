(function() {
  'use strict';

  var GENRES = {
    'pop'  : [{id:1, colour:'orange', genre:'pop', image:'http://loremflickr.com/' + 300 + '/100', artist:'Jason Mraz', title:'I wont give up', lyricVideo:'https://www.youtube.com/watch?v=TdN5GyTl8K0', musicVideo:'', taskUrl: '/tasks/1.png'}],
    'rock' : [{id:1, colour:'blue', genre:'rock', image:'http://loremflickr.com/' + 300 + '/100', artist:'Nickleback', title:'If Everyone Cared', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''},
              {id:2, colour:'blue', genre:'rock', image:'http://loremflickr.com/' + 300 + '/100', artist:'Foo Fighters', title:'Breakout', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'theatre' : [{id:1, colour:'pink', genre:'theatre', image:'http://loremflickr.com/' + 300 + '/100', artist:'Wicked', title:'Defying Gravity', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES );
})();
