(function() {
  'use strict';

  var GENRES = {
    'theatre' : [{id:1, colour:'pink', genre:'theatre', image:'assets/images/theatre/defy-gravity/defy-gravity.jpg', artist:'Wicked', title:'Defying Gravity', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'pop'  : [{id:1, colour:'orange', genre:'pop', image:'http://placehold.it/325x275', artist:'Jason Mraz', title:'I wont give up', lyricVideo:'https://www.youtube.com/watch?v=TdN5GyTl8K0', musicVideo:'', taskUrl: '/tasks/1.png'}],
    'rock' : [{id:1, colour:'blue', genre:'rock', image:'http://placehold.it/325x275', artist:'Nickleback', title:'If Everyone Cared', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''},
              {id:2, colour:'blue', genre:'rock', image:'http://placehold.it/325x275', artist:'Foo Fighters', title:'Breakout', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'folk' : [{id:1, colour:'yellow', genre:'folk', image:'http://placehold.it/325x275', artist:'???', title:'??? TITLE', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'film' : [{id:1, colour:'green', genre:'film', image:'http://placehold.it/325x275', artist:'???', title:'??? TITLE', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}],
    'mystery' : [{id:1, colour:'red', genre:'mystery', image:'http://placehold.it/325x275', artist:'???', title:'??? TITLE', lyricVideo:'https://www.youtube.com/watch?v=CkliFcBLXc8', musicVideo:'', taskUrl: ''}]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES );
})();
