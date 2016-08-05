(function() {
  'use strict';

  var GENRES = {
    'rock': [{
      id: 1,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/daughtry/daughtry.jpg',
      artist: 'Daughtry',
      title: 'What About Now',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/rock/daughtry/daughtry_what-about-now.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/disturbed/disturbed.jpg',
      artist: 'Disturbed',
      title: 'The Sound Of Silence',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/rock/disturbed/disturbed-the-sound-of-silence.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 3,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/linkin-park/linkin-park.jpg',
      artist: 'Linkin Park',
      title: 'Castle Of Glass',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/rock/linkin-park/linkin-park_castle-of-glass.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/nickelback/nickelback.jpg',
      artist: 'Nickelback',
      title: 'If Everyone Cared',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/rock/nickelback/nickelback-if-everyone-cared.mp4',
      musicVideo: '',
      taskUrl: ''
    }],
    'theatre': [{
      id: 1,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/wicked/wicked.jpg',
      artist: 'Wicked',
      title: 'Defying Gravity',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/theatre/wicked/wicked-defying-gravity-lyric-video.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/my-fair-lady/my-fair-lady.jpg',
      artist: 'My Fair Lady',
      title: "Wouldn't It Be Loverly",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/theatre/my-fair-lady/my-fair-lady_wouldnt-it-be-loverly.mp4',
      musicVideo: '',
      taskUrl: ''
    }],
    'pop': [{
      id: 1,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/a-ha/a-ha.jpg',
      artist: 'A-Ha',
      title: 'Take On Me',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/a-ha/a-ha_take-on-me.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 2,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/jason-mraz/jason-mraz.jpg',
      artist: 'Jason Mraz',
      title: 'I wont give up',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/jason-mraz/jason-mraz_i-won't-give-up.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 3,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/katy-perry/katy-perry.jpg',
      artist: 'Katy Perry',
      title: 'Firework',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/katy_perry/katy_perry-firework.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 4,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/kylie/kylie.jpg',
      artist: 'Kylie Minogue',
      title: 'Only You',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/kylie/kylie_only-you.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 5,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/lenka/lenka.jpg',
      artist: 'Lenka',
      title: 'Everything At Once',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/lenka/lenka-everything_at_once.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }],
    'country': [{
      id: 1,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.jpg',
      artist: 'Miranda Lambert',
      title: 'The House That Built Me',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/kelly-clarkson/kelly-clarkson.jpg',
      artist: 'Kelly Clarkson',
      title: 'Tie It Up',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/kelly-clarkson/kelly-clarkson_tie-it-up.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 3,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/tim-mcgraw/tim-mcgraw.jpg',
      artist: 'Tim McGraw',
      title: 'Humble And Kind',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/tim-mcgraw/tim-mcgraw_humble-and-kind.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/carrie-underwood/carrie-underwood.jpg',
      artist: 'Carrie Underwood',
      title: 'Change',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/carrie-underwood/carrie_underwood-change.mp4',
      musicVideo: '',
      taskUrl: ''
    }],
    'film & tv': [{
      id: 1,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/anna-kendrick/anna-kendrick.jpg',
      artist: 'Anna Kendrick',
      title: 'Cups (Pitch Perfect)',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/anna-kendrick/anna_kendrick-cups.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/american-idol/kelly-clarkson.jpg',
      artist: 'Kelly Clarkson',
      title: 'Piece By Piece (American Idol)',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/american-idol/kelly-clarkson_piece-by-piece.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 3,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/eurovision/jo_and_jake.jpg',
      artist: 'Jo & Jake',
      title: "You're Not Alone",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/eurovision/jo-and-jake_youre-not-alone.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/frozen/frozen.jpg',
      artist: 'Frozen',
      title: "Let It Go",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/frozen/frozen_let-it-go.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 5,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/muppets/muppets.jpg',
      artist: 'Muppets',
      title: "The Giant Crumpet Show (Warburtons Ad)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/muppets/the-muppets_warburtons-ad_the-giant-crumpet-show.mp4',
      musicVideo: '',
      taskUrl: ''
    }],
    'dance': [{
      id: 1,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/rudimental/rudimental.jpg',
      artist: 'Rudimental',
      title: 'Free',
      lyricVideo: 'assets/data/dance/rudimental/rudimental-free-music.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 2,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/avicii/avicii.jpg',
      artist: 'Avicii',
      title: 'Waiting For Love',
      lyricVideo: 'assets/data/dance/avicii/avicii-waiting-for-love-lyric.mp4',
      musicVideo: '',
      taskUrl: ''
    }]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES);
})();
