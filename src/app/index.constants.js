(function() {
  'use strict';

  var GENRES = {
    'theatre': [{
      id: 1,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/images/theatre/defy-gravity/defy-gravity.jpg',
      artist: 'Wicked',
      title: 'Defying Gravity',
      description: '',
      lyricVideo: 'https://www.youtube.com/watch?v=CkliFcBLXc8',
      musicVideo: '',
      taskUrl: ''
    }],
    'pop': [{
      id: 1,
      colour: 'yellow',
      genre: 'pop',
      image: 'http://placehold.it/325x275',
      artist: 'Jason Mraz',
      title: 'I wont give up',
      description: '',
      lyricVideo: 'https://www.youtube.com/watch?v=TdN5GyTl8K0',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }],
    'rock': [{
      id: 1,
      colour: 'red',
      genre: 'rock',
      image: 'http://placehold.it/325x275',
      artist: 'Nickleback',
      title: 'If Everyone Cared',
      description: '',
      lyricVideo: 'https://www.youtube.com/watch?v=CkliFcBLXc8',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'red',
      genre: 'rock',
      image: 'http://placehold.it/325x275',
      artist: 'Foo Fighters',
      title: 'Breakout',
      description: '',
      lyricVideo: 'https://www.youtube.com/watch?v=CkliFcBLXc8',
      musicVideo: '',
      taskUrl: ''
    }],
    'country': [{
      id: 1,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.jpg',
      artist: 'Miranda Lambert',
      title: 'The House That Built Me',
      description: 'Some description about the tasks...',
      lyricVideo: 'assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.mp4',
      musicVideo: '',
      taskUrl: ''
    }],
    'film': [{
      id: 1,
      colour: 'pink',
      genre: 'film',
      image: 'http://placehold.it/325x275',
      artist: '???',
      title: '??? TITLE',
      lyricVideo: 'https://www.youtube.com/watch?v=CkliFcBLXc8',
      musicVideo: '',
      taskUrl: ''
    }],
    'mystery': [{
      id: 1,
      colour: 'blue',
      genre: 'mystery',
      image: 'http://placehold.it/325x275',
      artist: '???',
      title: '??? TITLE',
      lyricVideo: 'https://www.youtube.com/watch?v=CkliFcBLXc8',
      musicVideo: '',
      taskUrl: ''
    }]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES);
})();
