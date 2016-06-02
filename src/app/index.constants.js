(function() {
  'use strict';

  var GENRES = {
    'pop'  : [{id:1, genre:'pop', image:'http://lorempixel.com/' + 501 + '/250', artist:'Jason Mraz', title:'I wont give up', lyricVideo:'https://www.youtube.com/watch?v=TdN5GyTl8K0', musicVideo:'', taskUrl: '/tasks/1.png'}],
    'rock' : [{id:1, genre:'rock', image:'http://lorempixel.com/' + 501 + '/250', artist:'Nickleback', title:'If Everyone Cared', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''},
              {id:2, genre:'rock', image:'http://lorempixel.com/' + 502 + '/250', artist:'Foo Fighters', title:'Breakout', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'theatre' : [{id:1, genre:'theatre', image:'http://lorempixel.com/' + 501 + '/250', artist:'Wicked', title:'Defying Gravity', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES );
})();
