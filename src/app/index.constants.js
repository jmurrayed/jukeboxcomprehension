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
      image: 'assets/data/pop/adele/adele.jpg',
      artist: 'Adele',
      title: 'Rolling In The Deep',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/adele/adele-rolling-in-the-deep.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 3,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/beverley-knight/beverley-knight.jpg',
      artist: 'Beverley Knight',
      title: 'Keep This Fire Burning',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/beverley-knight/beverley-knight_keep-this-fire-burning.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 4,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/christina-aguilera/christina-aguilera.jpg',
      artist: 'Christina Aguilera',
      title: 'Fighter',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/christina-aguilera/christina_aguilera-fighter.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 5,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/duffy/duffy.jpg',
      artist: 'Duffy',
      title: 'Warwick Avenue',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/duffy/duffy_warwick-avenue.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 6,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/greg-holden/greg-holden.jpg',
      artist: 'Greg Holden',
      title: 'Hold On Tight',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/greg-holden/greg-holden_hold-on-tight.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 7,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/heather-small/heather-small.jpg',
      artist: 'Heather Small',
      title: 'Proud',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/heather-small/heather-small_proud.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 8,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/jason-mraz/jason-mraz.jpg',
      artist: 'Jason Mraz',
      title: "I Won't Give Up",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: "assets/data/pop/jason-mraz/jason-mraz_i-won't-give-up.mp4",
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 9,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/katy-perry/katy-perry.jpg',
      artist: 'Katy Perry',
      title: 'Firework',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/katy-perry/firework-lyric.mp4',
      musicVideo: 'assets/data/pop/katy-perry/firework-music.mp4',
      taskUrl: '/tasks/1.png'
    }, {
      id: 10,
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
      id: 11,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/lenka/lenka.jpg',
      artist: 'Lenka',
      title: 'Everything At Once',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/lenka/lenka-everything_at_once.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    },  {
      id: 12,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/michael-jackson/michael_jackson_1.jpg',
      artist: 'Michael Jackson',
      title: 'Black Or White',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/michael-jackson/michael_jackson-black_or_white.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 13,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/norah-jones/norah_jones.jpeg',
      artist: 'Norah Jones',
      title: 'Come Away With Me',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/norah-jones/norah-jones_come-away-with-me.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 14,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/rick-astley/rick-astley.png',
      artist: 'Rick Astley',
      title: 'Keep Singing',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/rick-astley/rick_astley_keep-singing.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 15,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/sabrina-carpenter/sabrina-carpenter.jpg',
      artist: 'Sabrina Carpenter',
      title: 'Smoke And Fire',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/sabrina-carpenter/sabrina-carpenter_smoke-and-fire-lyric.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }, {
      id: 16,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/the-verve/verve.jpg',
      artist: 'The Verve',
      title: 'Bitter Sweet Symphony',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/the-verve/the-verve_bitter-sweet-symphony.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    },{
      id: 17,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/michael-jackson/michael-jackson.jpg',
      artist: 'Michael Jackson',
      title: 'Earth Song',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/pop/michael-jackson/michael_jackson-earthsong.mp4',
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
    }, {
      id: 5,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/nichole-nordeman/nichole-nordeman.jpg',
      artist: 'Nichole Nordeman',
      title: 'Slow Down',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/nichole-nordeman/nichole-nordeman_slow-down-lyric.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 6,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/dolly-parton/dolly_parton.jpg',
      artist: 'Dolly Parton',
      title: 'Blue Smoke',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/country/dolly-parton/dolly_parton_blue-smoke.mp4',
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
      description: 'Place the text in the correct chronological order using key word and context clues.',
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
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/dance/avicii/avicii-waiting-for-love-lyric.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 3,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/david-guetta/david-guetta.jpg',
      artist: 'David Guetta',
      title: 'Titanium',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/dance/david-guetta/david_guetta-titanium-music.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/woodkid/woodkid.jpg',
      artist: 'Woodkid',
      title: 'Run Boy Run',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/dance/woodkid/woodkid_run-boy-run.mp4',
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
      image: 'assets/data/film/eurovision/joe_and_jake.jpg',
      artist: 'Joe & Jake',
      title: "You're Not Alone (Eurovision)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/eurovision/joe-and-jake_youre-not-alone.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/frozen/frozen.jpg',
      artist: 'Idina Menzel',
      title: "Let It Go (Frozen)",
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
      title: "The Giant Crumpet Show (Warburton's Ad)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/muppets/the-muppets_warburtons-ad_the-giant-crumpet-show.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 6,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/david-bowie/labyrinth.jpg',
      artist: 'David Bowie',
      title: "Magic Dance (Labrynth)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/david-bowie/labyrinth_magic-dance-lyric.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 7,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/christina-perri/christina-perri.jpg',
      artist: 'Christina Perri',
      title: "A Thousand Years (Twilight)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/christina-perri/christina-perri_a-thousand-years.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 8,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/mans-zelmerlow/mans_zelmerlow.jpg',
      artist: 'Måns Zelmerlöw',
      title: "Heroes (Eurovision)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/mans-zelmerlow/mans_zelmerlow-heroes.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 9,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/rihanna/rihanna.jpg',
      artist: 'Rihanna',
      title: "Sledgehammer (Star Trek - Beyond)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/rihanna/rihanna-sledgehammer.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 10,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/vista-print/the-postcard.jpg',
      artist: 'D-Larson',
      title: "Hold On Tight (Vista Print Ad)",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/vista-print/father-son_the-postcard.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 11,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/ed-sheeran/ed-sheeran.jpg',
      artist: 'Ed Sheeran',
      title: 'I See Fire',
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/film/ed-sheeran/ed-sheeran_I-see-fire-music.mp4',
      musicVideo: '',
      taskUrl: '/tasks/1.png'
    }],
    'theatre': [{
      id: 1,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/wicked/wicked.png',
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
    }, {
      id: 3,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/cats/cats.jpg',
      artist: 'Cats',
      title: "Memory",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/theatre/cats/memory.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 4,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/oliver/oliver.jpg',
      artist: 'Oliver',
      title: "You Gotta Pick A Pocket Or Two",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/theatre/oliver/pick-a-pocket-or-two.mp4',
      musicVideo: '',
      taskUrl: ''
    }, {
      id: 5,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/phantom/phantom.jpg',
      artist: 'Phantom',
      title: "Phantom Theme",
      description: 'Place the text in the correct chronological order using key word and context clues.',
      lyricVideo: 'assets/data/theatre/phantom/phantom-theme.mp4',
      musicVideo: '',
      taskUrl: ''
    }]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES);
})();
