(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension', [
      "ngRoute",
      "ui.bootstrap",
      "firebase",
      "com.2fdevs.videogular",
      "com.2fdevs.videogular.plugins.controls",
      "com.2fdevs.videogular.plugins.overlayplay",
      "com.2fdevs.videogular.plugins.poster"
    ]);

})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('TermsController', TermsController);

  /** @ngInject */
  function TermsController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .directive('navbarHeader', navbarHeader);

  /** @ngInject */
  function navbarHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'nc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      // var vm = this;
      // var temp = $rootScope.$on('genreColour', function(event, args) {
      //   vm.colour = args;
      // });
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, $uibModal, $rootScope, Logout, GENRES,
    GenreModel) {
    var vm = this;
    vm.genreKeys = GenreModel.getGenres();
    vm.genreColour = GenreModel.getGenreColour();
    vm.selectedGenre = GenreModel.getGenre();

    vm.setGenre = setGenre;
    vm.genreColourByKey = genreColourByKey;

    if (Logout === true) {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/logout/logout.html',
        controller: 'LogoutController',
        controllerAs: 'logout'
      });
    }

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

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($location, $uibModalInstance, loginService) {
    var vm = this;
    vm.close = function() {
      $uibModalInstance.close();
      return $location.path('/');
    };

    vm.logout = function() {
      loginService.logout();
      $uibModalInstance.close();
      return $location.path('/');
    };

  }
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($firebaseAuth) {
    var firebaseAuthObject = $firebaseAuth();

    var service = {
      firebaseAuthObject: firebaseAuthObject,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    };

    return service;

    ////////////  Function definitions

    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
      firebaseAuthObject.$signOut();
    }

    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }

  }

})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $uibModalInstance, $log, loginService) {
    var vm = this;

    vm.login = function(user) {
      return loginService.login(user)
        .then(function() {
          $uibModalInstance.close();
        })
        .catch(function(error) {
          $log.error("login failed " + error);
          vm.error = error;
        });
    };

    vm.close = function() {
      $uibModalInstance.close();
    };

    vm.isLoggedIn = function() {
      var res = loginService.isLoggedIn();
      if (res == null) {
        vm.userInfo = null;
        return false;
      } else {
        vm.userInfo = res;
        return true;
      }
    };

  }
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, $log, $window, SelectedSong, $uibModal,
    loginService) {
    var vm = this;
    vm.selectedSong = SelectedSong[0];
    vm.videoType = '';

    // Public Functions...
    vm.getVideoLink = function() {
      if (vm.videoType == 'lyric') {
        return vm.selectedSong.lyricVideo;
      } else if (vm.videoType == 'music') {
        return vm.selectedSong.musicVideo;
      } else {
        return identifyVideo();
      }
    };

    vm.openRegister = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'rc'
      });
    };

    vm.isLoggedIn = function() {
      var res = loginService.isLoggedIn();
      if (res == null) {
        return false;
      } else {
        return true;
      }
    };

    vm.getFileUrl = function(filename) {
      $log.info(vm.selectedSong.fileUrl + filename);
      var storageRef = new firebase.storage()
        .ref(vm.selectedSong.fileUrl + filename);
      storageRef.getDownloadURL().then(function(url) {
        // $log.info("url -> " + url);
        $window.open(url, '_blank');
      });
    }

    vm.trimBrackets = function(str) {
      var index = str.indexOf("(");
      if (index > 0) {
        return str.substring(0, index);
      } else {
        return str;
      }
    }

    // Private Functions
    function identifyVideo() {
      if (vm.selectedSong.musicVideo) {
        return vm.selectedSong.musicVideo;
      } else {
        return vm.selectedSong.lyricVideo;
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('ContactController',ContactController);

  /** @ngInject */
  function ContactController($uibModalInstance) {
    var vm = this;
    vm.close = function () {
      $uibModalInstance.dismiss('close');
    };
  }
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal, $routeParams, loginService) {
    var vm = this;

    vm.date = new Date();

    vm.openContact = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'cc'
      });
    };

    vm.openTerms = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/terms/terms.html',
        controller: 'TermsController',
        controllerAs: 'tc'
      });
    };

    vm.openLogin = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'lc',
        resolve: {
          items: function() {
            return [];
          }
        }
      });
    };

    vm.openLogout = function() {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/components/logout/logout.html',
        controller: 'LogoutController',
        controllerAs: 'logout'
      });
    };

    vm.isLoggedIn = function() {
      var res = loginService.isLoggedIn();
      if (res == null) {
        vm.userInfo = null;
        return false;
      } else {
        vm.userInfo = res;
        return true;
      }
    };

  }
})();

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

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/songs/:GENRE/:ID/', {
        templateUrl: 'app/components/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail',
        resolve: {
          SelectedSong: function($route, $filter, GENRES) {
            return $filter('filter')(GENRES[$route.current.params.GENRE], {
              id: $route.current.params.ID
            });
          }
        }
      })
      .when('/logout', {
        templateUrl: 'app/components/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menu',
        resolve: {
          Logout: function() {
            return true;
          }
        }
      })
      .when('/', {
        templateUrl: 'app/components/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menu',
        resolve: {
          Logout: function() {
            return false;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  }

})();

(function() {
  'use strict';

  var GENRES = {
    'rock': [{
      id: 0,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/landing-photo-rock.jpg',
      artist: '',
      title: 'ROCK',
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/daughtry/daughtry.jpg',
      artist: 'Daughtry',
      title: 'What About Now',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/daughtry/daughtry_what-about-now.mp4',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/disturbed/disturbed.jpg',
      artist: 'Disturbed',
      title: 'The Sound Of Silence',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/disturbed/disturbed-the-sound-of-silence.mp4',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/linkin-park/linkin-park.jpg',
      artist: 'Linkin Park',
      title: 'Castle Of Glass',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/linkin-park/linkin-park_castle-of-glass.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/nickelback/nickelback.jpg',
      artist: 'Nickelback',
      title: 'If Everyone Cared',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/nickelback/nickelback-if-everyone-cared.mp4',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/hoobastank/hoobastank.jpeg',
      artist: 'Hoobastank',
      title: 'The Reason',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/hoobastank/hoobastank_the-reason.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/smashing-pumpkins/smashing.jpg',
      artist: 'The Smashing Pumpkins',
      title: 'Tonight, Tonight',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/smashing-pumpkins/the-smashing-pumpkins_tonight-tonight.mp4',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/lower-than-atlantis/lower-than-atlantis.jpg',
      artist: 'Lower Than Atlantis',
      title: 'Get Over it',
      description: '',
      lyricVideo: 'assets/data/rock/lower-than-atlantis/lower-than-atlantis-get-over-it-lyrics.mp4',
      musicVideo: 'assets/data/rock/lower-than-atlantis/lower-than-atlantis-get-over-it.mp4',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/muse/muse.jpg',
      artist: 'Muse',
      title: 'Feeling Good',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/muse/muse-feeling-good.mp4',
      fileUrl: ''
    }, {
      id: 9,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/tenacious-d/tenacious-d.jpg',
      artist: 'Tenacious D',
      title: 'Tribute',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/tenacious-d/tenacious-d-tribute.mp4',
      fileUrl: ''
    }, {
      id: 10,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/linkin-park/linkin-park-1.jpg',
      artist: 'Linkin Park',
      title: 'In The End',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/linkin-park/linkin-park_in-the-end.mp4',
      fileUrl: ''
    }, {
      id: 11,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/stereophonics/stereophonics.jpg',
      artist: 'Stereophonics',
      title: 'Graffiti On The Train',
      description: '',
      lyricVideo: 'assets/data/rock/stereophonics/stereophonics-graffiti-on-the-train-lyrics.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 12,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/lifehouse/lifehouse.jpg',
      artist: 'Lifehouse',
      title: 'You And Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/lifehouse/lifehouse-you-and-me-video.mp4',
      fileUrl: ''
    }, {
      id: 13,
      colour: 'red',
      genre: 'rock',
      image: 'assets/data/rock/averil-lavigne/avril-lavigne.jpg',
      artist: 'Averil Lavigne',
      title: 'Sk8r Boi',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/rock/averil-lavigne/averil-lavigne-sk8r-boi-video.mp4',
      fileUrl: ''
    }],
    'pop': [{
      id: 0,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/pop-landing-icon.jpg',
      artist: '',
      title: 'POP',
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/a-ha/a-ha.jpg',
      artist: 'A-Ha',
      title: 'Take On Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/a-ha/a-ha_take-on-me.mp4',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/adele/adele.jpg',
      artist: 'Adele',
      title: 'Rolling In The Deep',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/adele/adele-rolling-in-the-deep.mp4',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/beverley-knight/beverley-knight.jpg',
      artist: 'Beverley Knight',
      title: 'Keep This Fire Burning',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/beverley-knight/beverley-knight_keep-this-fire-burning.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/christina-aguilera/christina-aguilera.jpg',
      artist: 'Christina Aguilera',
      title: 'Fighter',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/christina-aguilera/christina_aguilera-fighter.mp4',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/duffy/duffy.jpg',
      artist: 'Duffy',
      title: 'Warwick Avenue',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/duffy/duffy_warwick-avenue.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/greg-holden/greg-holden.jpg',
      artist: 'Greg Holden',
      title: 'Hold On Tight',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/greg-holden/greg-holden_hold-on-tight.mp4',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/heather-small/heather-small.jpg',
      artist: 'Heather Small',
      title: 'Proud',
      description: '',
      lyricVideo: "",
      musicVideo: 'assets/data/pop/heather-small/heather-small_proud.mp4',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/jason-mraz/jason-mraz.jpg',
      artist: 'Jason Mraz',
      title: "I Won't Give Up",
      description: '',
      lyricVideo: "",
      musicVideo: "assets/data/pop/jason-mraz/jason-mraz_i-won't-give-up.mp4",
      fileUrl: ''
    }, {
      id: 9,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/katy-perry/katy-perry.jpg',
      artist: 'Katy Perry',
      title: 'Firework',
      description: '',
      lyricVideo: 'assets/data/pop/katy-perry/firework-lyric.mp4',
      musicVideo: 'assets/data/pop/katy-perry/firework-music.mp4',
      fileUrl: '/pop/katy-perry-firework/'
    }, {
      id: 10,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/kylie/kylie.jpg',
      artist: 'Kylie Minogue',
      title: 'Only You',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/kylie/kylie_only-you.mp4',
      fileUrl: ''
    }, {
      id: 11,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/lenka/lenka.jpg',
      artist: 'Lenka',
      title: 'Everything At Once',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/lenka/lenka-everything_at_once.mp4',
      fileUrl: ''
    }, {
      id: 12,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/michael-jackson/michael_jackson_1.jpg',
      artist: 'Michael Jackson',
      title: 'Black Or White',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/michael-jackson/michael_jackson-black_or_white.mp4',
      fileUrl: ''
    }, {
      id: 13,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/norah-jones/norah_jones.jpeg',
      artist: 'Norah Jones',
      title: 'Come Away With Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/norah-jones/norah-jones_come-away-with-me.mp4',
      fileUrl: ''
    }, {
      id: 14,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/rick-astley/rick-astley.png',
      artist: 'Rick Astley',
      title: 'Keep Singing',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/rick-astley/rick_astley_keep-singing.mp4',
      fileUrl: ''
    }, {
      id: 15,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/sabrina-carpenter/sabrina-carpenter.jpg',
      artist: 'Sabrina Carpenter',
      title: 'Smoke And Fire',
      description: '',
      lyricVideo: 'assets/data/pop/sabrina-carpenter/sabrina-carpenter_smoke-and-fire-lyric.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 16,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/the-verve/verve.jpg',
      artist: 'The Verve',
      title: 'Bitter Sweet Symphony',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/the-verve/the-verve_bitter-sweet-symphony.mp4',
      fileUrl: ''
    }, {
      id: 17,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/michael-jackson/michael-jackson.jpg',
      artist: 'Michael Jackson',
      title: 'Earth Song',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/michael-jackson/michael_jackson-earthsong.mp4',
      fileUrl: ''
    }, {
      id: 18,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/aurora/aurora.jpg',
      artist: 'Aurora',
      title: 'Half The World Away',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/aurora/aurora_half-the-world-away.mp4',
      fileUrl: ''
    }, {
      id: 19,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/frances/frances.jpg',
      artist: 'Frances',
      title: 'Say It Again',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/frances/frances_say-it-again.mp4',
      fileUrl: ''
    }, {
      id: 20,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/justin-timberlake/justin-timberlake.jpg',
      artist: 'Justin Timberlake',
      title: "Can't Stop The Feeling",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/justin-timberlake/cant-stop-the-feeling.mp4',
      fileUrl: ''
    }, {
      id: 21,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/will-young/will-young.jpeg',
      artist: 'Will Young',
      title: 'Come On',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/will-young/will-young_come-on.mp4',
      fileUrl: ''
    }, {
      id: 22,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/coldplay/coldplay.jpg',
      artist: 'Coldplay',
      title: 'Something Just Like This',
      description: '',
      lyricVideo: 'assets/data/pop/coldplay/coldplay-something-just-like-this-lyric.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 23,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/cyndi-lauper/cyndi-lauper.jpeg',
      artist: 'Cyndi Lauper',
      title: 'True Colours',
      description: '',
      lyricVideo: 'assets/data/pop/cyndi-lauper/cyndi-lauper-true-colours-lyrics.mp4',
      musicVideo: 'assets/data/pop/cyndi-lauper/cyndi-lauper-true-colours-video.mp4',
      fileUrl: ''
    }, {
      id: 24,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/elvis/elvis.jpg',
      artist: 'Elvis',
      title: 'Return To Sender',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/elvis/elvis-return-to-sender.mp4',
      fileUrl: ''
    }, {
      id: 25,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/emile-sande/emile-sande.jpg',
      artist: 'Emile Sande',
      title: 'Hurts',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/emile-sande/emile-sande-hurts.mp4',
      fileUrl: ''
    }, {
      id: 26,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/four-tops/four-tops.jpg',
      artist: 'Four Tops',
      title: 'Reach Out',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/four-tops/four-tops-reach-out.mp4',
      fileUrl: ''
    }, {
      id: 27,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/pentatonix/pentatonix.jpg',
      artist: 'Pentatonix',
      title: 'Hallelujah',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/pentatonix/pentatonix-hallelujah.mp4',
      fileUrl: ''
    }, {
      id: 28,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/george-ezra/george-ezra.jpg',
      artist: 'George Ezra',
      title: 'Listen To The Man',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/george-ezra/george-ezra-listen-to-the-man.mp4',
      fileUrl: ''
    }, {
      id: 29,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/jake-coco/jake-coco.jpg',
      artist: 'Jake Coco',
      title: 'Your Song',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/jake-coco/jake-coco-your-song.mp4',
      fileUrl: ''
    }, {
      id: 30,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/john-legend/john-legend.jpg',
      artist: 'John Legend',
      title: 'Love Me Now',
      description: '',
      lyricVideo: 'assets/data/pop/john-legend/john-legend-love-me-now-lyric.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 31,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/kt-tunstall/kt-tunstall.jpg',
      artist: 'KT Tunstall',
      title: 'Hard Girls',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/kt-tunstall/kt-tunstall-hard-girls.mp4',
      fileUrl: ''
    }, {
      id: 32,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/little-mix/little-mix.jpg',
      artist: 'Little Mix',
      title: 'Little Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/little-mix/little-mix-little-me.mp4',
      fileUrl: ''
    }, {
      id: 33,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/lucy-spraggan/lucy-spraggan.jpg',
      artist: 'Lucy Spraggan',
      title: 'Mountains',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/lucy-spraggan/lucy-spraggan-mountains.mp4',
      fileUrl: ''
    }, {
      id: 34,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/miley-cyrus/miley-cyrus.png',
      artist: 'Miley Cyrus',
      title: 'The Climb',
      description: '',
      lyricVideo: 'assets/data/pop/miley-cyrus/miley-cyrus-the-climb-lyrics.mp4',
      musicVideo: 'assets/data/pop/miley-cyrus/miley-cyrus-the-climb.mp4',
      fileUrl: ''
    }, {
      id: 35,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/natasha-bedingfield/natasha-bedingfield.jpg',
      artist: 'Natasha Bedingfield',
      title: 'Unwritten',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/natasha-bedingfield/natasha-bedingfield-unwritten.mp4',
      fileUrl: ''
    }, {
      id: 36,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/niall-horan/niall-horan.jpg',
      artist: 'Niall Horan',
      title: 'This Town',
      description: '',
      lyricVideo: 'assets/data/pop/niall-horan/niall-horan-this-town-lyric-video.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 37,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/boyzone/boyzone.jpg',
      artist: 'Boyzone',
      title: 'Who We Are',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/boyzone/boyzone-who-we-are.mp4',
      fileUrl: ''
    }, {
      id: 38,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/katy-perry/katy-perry2.jpg',
      artist: 'Katy Perry',
      title: 'Roar',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/katy-perry/katy-perry-roar.mp4',
      fileUrl: ''
    }, {
      id: 39,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/owl-city/owl-city.jpg',
      artist: 'Owl City',
      title: 'Fireflies',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/owl-city/owl-city-fireflies.mp4',
      fileUrl: ''
    }, {
      id: 40,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/olly-murs/olly-murs.jpg',
      artist: 'Olly Murs',
      title: 'Dance With Me Tonight',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/olly-murs/olly-murs-dance-with-me-tonight.mp4',
      fileUrl: ''
    }, {
      id: 41,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/pentatonix/pentatonix-sing.jpg',
      artist: 'Pentatonix',
      title: 'Sing',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/pentatonix/pentatonix-sing-video.mp4',
      fileUrl: ''
    }, {
      id: 42,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/tracy-chapman/tracy-chapman.jpg',
      artist: 'Tracy Chapman',
      title: 'Fast Cars',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/tracy-chapman/tracy-chapman-fast-cars.mp4',
      fileUrl: ''
    }, {
      id: 43,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/peter-gabriel/peter-gabriel.jpg',
      artist: 'Peter Gabriel',
      title: 'Sledgehammer',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/peter-gabriel/peter-gabriel-sledgehammer.mp4',
      fileUrl: ''
    }, {
      id: 44,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/rachel-platten/rachel-platten.jpg',
      artist: 'Rachel Platten',
      title: 'Fight Song',
      description: '',
      lyricVideo: 'assets/data/pop/rachel-platten/rachel-platten-lyric-video.mp4',
      musicVideo: 'assets/data/pop/rachel-platten/rachel-platten-fight-song.mp4',
      fileUrl: ''
    }, {
      id: 45,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/rag-n-bone/rag-n-bone-man.jpg',
      artist: 'Rag N Bone Man',
      title: 'Human',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/rag-n-bone/rag-n-bone-man-human.mp4',
      fileUrl: ''
    }, {
      id: 46,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/rebecca-ferguson/rebecca-ferguson.jpg',
      artist: 'Rebecca Ferguson',
      title: 'I Hope',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/rebecca-ferguson/rebecca-ferguson-i-hope.mp4',
      fileUrl: ''
    }, {
      id: 47,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/ruth-b/ruth-b.jpg',
      artist: 'Ruth B',
      title: 'Lost Boy',
      description: '',
      lyricVideo: 'assets/data/pop/ruth-b/ruth-b-lost-boy-lyric-video.mp4',
      musicVideo: 'assets/data/pop/ruth-b/ruth-b-lost-boy.mp4',
      fileUrl: ''
    }, {
      id: 48,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/sampha/sampha.jpg',
      artist: 'Sampha',
      title: 'Like The Piano',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/sampha/sampha-like-the-piano.mp4',
      fileUrl: ''
    }, {
      id: 49,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/shivaree/shivaree.jpg',
      artist: 'Shivaree',
      title: 'The Snake',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/shivaree/shivaree-the-snake.mp4',
      fileUrl: ''
    }, {
      id: 50,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/sia/sia.jpg',
      artist: 'Sia',
      title: 'The Greatest',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/sia/sia-the-greatest.mp4',
      fileUrl: ''
    }, {
      id: 51,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/tom-chaplain/tom-chaplain.jpg',
      artist: 'Tom Chaplain',
      title: 'Still Waiting',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/tom-chaplain/tom-chaplain-still-waiting.mp4',
      fileUrl: ''
    }, {
      id: 52,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/tony-ferrari/tony-ferrari.jpg',
      artist: 'Tony Ferrari',
      title: 'Stand By Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/tony-ferrari/tony-ferrari-stand-by-me.mp4',
      fileUrl: ''
    }, {
      id: 53,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/vanessa-carlton/vanessa-carlton.jpg',
      artist: 'Vanessa Carlton',
      title: 'A Thousand Miles',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/vanessa-carlton/vanessa-carlton_a-thousand-miles.mp4',
      fileUrl: ''
    }, {
      id: 54,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/take-that/take-that.jpg',
      artist: 'Take That',
      title: 'We Are Giants',
      description: '',
      lyricVideo: 'assets/data/pop/take-that/take-that-giants-lyrics.mp4',
      musicVideo: 'assets/data/pop/take-that/take-that-giants-video.mp4',
      fileUrl: ''
    }, {
      id: 55,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/charlene-soraia/charlene-soraia.jpg',
      artist: 'Charlene Soraia',
      title: 'Wherever You Will Go',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/charlene-soraia/charlene-soraia-wherever-you-will-go-video.mp4',
      fileUrl: ''
    }, {
      id: 56,
      colour: 'yellow',
      genre: 'pop',
      image: 'assets/data/pop/colbie-caillat/colbie-caillat.jpeg',
      artist: 'Colbie Caillat',
      title: 'Try',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/pop/colbie-caillat/colbie-caillat-try.mp4',
      fileUrl: ''
    }],
    'country': [{
      id: 0,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/landing-photo-country.jpg',
      artist: '',
      title: 'COUNTRY',
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/miranda-lambert/miranda-lambert.jpg',
      artist: 'Miranda Lambert',
      title: 'The House That Built Me',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.mp4',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/kelly-clarkson/kelly-clarkson.jpg',
      artist: 'Kelly Clarkson',
      title: 'Tie It Up',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/kelly-clarkson/kelly-clarkson_tie-it-up.mp4',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/tim-mcgraw/tim-mcgraw.jpg',
      artist: 'Tim McGraw',
      title: 'Humble And Kind',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/tim-mcgraw/tim-mcgraw_humble-and-kind.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/nichole-nordeman/nichole-nordeman.jpg',
      artist: 'Nichole Nordeman',
      title: 'Slow Down',
      description: '',
      lyricVideo: 'assets/data/country/nichole-nordeman/nichole-nordeman_slow-down-lyric.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/dolly-parton/dolly_parton.jpg',
      artist: 'Dolly Parton',
      title: 'Blue Smoke',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/dolly-parton/dolly_parton_blue-smoke.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/alan-jackson/alan-jackson.jpg',
      artist: 'Alan Jackson',
      title: 'You Can Always Come Home',
      description: '',
      lyricVideo: 'assets/data/country/alan-jackson/alan-jackson-you-can-always-come-home-lyric-video.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/alexi-murdoch/alexi-murdoch.jpg',
      artist: 'Alexi Murdoch',
      title: 'Someday Soon',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/alexi-murdoch/alexi-murdoch-some-day-soon.mp4',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/brad-paisley/brad-paisley.jpg',
      artist: 'Brad Paisley',
      title: 'Today',
      description: '',
      lyricVideo: 'assets/data/country/brad-paisley/brad-paisley-today-lyrics.mp4',
      musicVideo: 'assets/data/country/brad-paisley/brad-paisley-today.mp4',
      fileUrl: ''
    }, {
      id: 9,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/cma/cma.jpg',
      artist: 'Country Music Awards',
      title: 'Forever Country',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/cma/cma-music-award-forever-country-various.mp4',
      fileUrl: ''
    }, {
      id: 10,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/james-tw/james-tw.jpg',
      artist: 'James TW',
      title: 'When You Love Someone',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/james-tw/james-tw-when-you-love-someone.mp4',
      fileUrl: ''
    }, {
      id: 11,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/lady-antebellum/lady-antebellum.jpg',
      artist: 'Lady Antebellum',
      title: 'American Honey',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/lady-antebellum/lady-antebellum-american-honey.mp4',
      fileUrl: ''
    }, {
      id: 12,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/ward-thomas/ward-thomas.jpg',
      artist: 'Ward Thomas',
      title: "Carry You Home",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/ward-thomas/ward-thomas-carry-you-home.mp4',
      fileUrl: ''
    }, {
      id: 13,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/the-shires/the-shires.jpg',
      artist: 'The Shires',
      title: "Daddy's Little Girl",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/the-shires/the-shires-daddys-little-girl.mp4',
      fileUrl: ''
    }, {
      id: 14,
      colour: 'orange',
      genre: 'country',
      image: 'assets/data/country/marren-morris/marren-morris.jpg',
      artist: 'Marren Morris',
      title: "My Church",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/country/marren-morris/maren-morris-my-church.mp4',
      fileUrl: ''
    }],
    'dance': [{
      id: 0,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/landing-photo-dance.jpg',
      artist: '',
      title: 'DANCE',
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/rudimental/rudimental.jpg',
      artist: 'Rudimental',
      title: 'Free',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/rudimental/rudimental-free-music.mp4',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/avicii/avicii.jpg',
      artist: 'Avicii',
      title: 'Waiting For Love',
      description: '',
      lyricVideo: 'assets/data/dance/avicii/avicii-waiting-for-love-lyric.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/david-guetta/david-guetta.jpg',
      artist: 'David Guetta',
      title: 'Titanium',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/david-guetta/david_guetta-titanium-music.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/woodkid/woodkid.jpg',
      artist: 'Woodkid',
      title: 'Run Boy Run',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/woodkid/woodkid_run-boy-run.mp4',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/starley/starley.jpg',
      artist: 'Starley',
      title: 'Call On Me',
      description: '',
      lyricVideo: 'assets/data/dance/starley/starley-call-on-me-lyrics.mp4',
      musicVideo: 'assets/data/dance/starley/starley-call-on-me.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/galantis/galantis.jpg',
      artist: 'Galantis',
      title: 'No Money',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/galantis/galantis-no-money.mp4',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/clean-bandit/clean-bandit.jpg',
      artist: 'Clean Bandit',
      title: 'Tears',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/clean-bandit/clean-bandit-tears.mp4',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'white',
      genre: 'dance',
      image: 'assets/data/dance/shakira/shakira.png',
      artist: 'Shakira',
      title: 'La La La',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/dance/shakira/shakira-la-la-la.mp4',
      fileUrl: ''
    }],
    'film & tv': [{
      id: 0,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/landing-photo-film-and-tv.jpg',
      artist: '',
      title: "FILM & TV",
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/muppets/muppets.jpg',
      artist: 'Muppets',
      title: "The Giant Crumpet Show (Warburtons Ad)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/muppets/the-muppets_warburtons-ad_the-giant-crumpet-show.mp4',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/anna-kendrick/anna-kendrick.jpg',
      artist: 'Anna Kendrick',
      title: 'Cups (Pitch Perfect)',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/anna-kendrick/anna_kendrick-cups.mp4',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/american-idol/kelly-clarkson.jpg',
      artist: 'Kelly Clarkson',
      title: 'Piece By Piece (American Idol)',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/american-idol/kelly-clarkson_piece-by-piece.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/frozen/frozen.jpg',
      artist: 'Idina Menzel',
      title: "Let It Go (Frozen)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/frozen/frozen_let-it-go.mp4',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/david-bowie/labyrinth.jpg',
      artist: 'David Bowie',
      title: "Magic Dance (Labrynth)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/david-bowie/labyrinth_magic-dance-lyric.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/christina-perri/christina-perri.jpg',
      artist: 'Christina Perri',
      title: "A Thousand Years (Twilight)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/christina-perri/christina-perri_a-thousand-years.mp4',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/mans-zelmerlow/mans_zelmerlow.jpg',
      artist: 'Måns Zelmerlöw',
      title: "Heroes (Eurovision)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/mans-zelmerlow/mans_zelmerlow-heroes.mp4',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/rihanna/rihanna.jpg',
      artist: 'Rihanna',
      title: "Sledgehammer (Star Trek - Beyond)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/rihanna/rihanna-sledgehammer.mp4',
      fileUrl: ''
    }, {
      id: 9,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/vista-print/the-postcard.jpg',
      artist: 'D-Larson',
      title: "Hold On Tight (Vista Print Ad)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/vista-print/father-son_the-postcard.mp4',
      fileUrl: ''
    }, {
      id: 10,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/ed-sheeran/ed-sheeran.jpg',
      artist: 'Ed Sheeran',
      title: 'I See Fire (The Hobbit)',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/ed-sheeran/ed-sheeran_I-see-fire-music.mp4',
      fileUrl: ''
    }, {
      id: 11,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/aldi/aldi-easter.jpg',
      artist: 'Jade Williams',
      title: 'My Favourite Things (Aldi Ad)',
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/aldi/favourite-things-parody_aldi-ad.mp4',
      fileUrl: ''
    }, {
      id: 12,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/enchanted/amy-adams.jpg',
      artist: 'Amy Adams',
      title: 'Happy Working Song (Enchanted)',
      description: '',
      lyricVideo: 'assets/data/film/enchanted/enchanted_happy-working-song_lyrics.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 13,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/diana/lady-diana.jpg',
      artist: 'Elton John',
      title: "Goodbye England's Rose (Diana)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/diana/goodbye-englands-rose-elton-john.mp4',
      fileUrl: ''
    }, {
      id: 14,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/glee/imagine-john-lennon-glee.jpg',
      artist: 'John Lennon',
      title: "Imagine (Glee)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/glee/imagine-john-lennon-glee.mp4',
      fileUrl: ''
    }, {
      id: 15,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/jungle-book/bare-necessaties.jpg',
      artist: 'Phil Harris',
      title: "Bare Necessaties (The Jungle Book)",
      description: '',
      lyricVideo: 'assets/data/film/jungle-book/bare-necessities-the-jungle-book-lyrics.mp4',
      musicVideo: 'assets/data/film/jungle-book/bare-necessaties-the-jungle-book.mp4',
      fileUrl: ''
    }, {
      id: 16,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/karen-o/karen-o.jpg',
      artist: 'Karen O',
      title: "Strange Love (Frankenweenie)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/karen-o/karen-o-strange-love-frankenweenie.mp4',
      fileUrl: ''
    }, {
      id: 17,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/paralympics/bpa.jpg',
      artist: 'Sammy Davis Jr',
      title: "Yes I Can (Paralympics)",
      description: '',
      lyricVideo: 'assets/data/film/paralympics/yes-i-can-audio-described.mp4',
      musicVideo: 'assets/data/film/paralympics/yes-i-can-paralympics-2016.mp4',
      fileUrl: ''
    }, {
      id: 18,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/pharrell-williams/pharrell-williams.jpg',
      artist: 'Pharrell Williams',
      title: "Happy (Despicable Me 2)",
      description: '',
      lyricVideo: 'assets/data/film/pharrell-williams/pharrell-williams-happy-lyric-video.mp4',
      musicVideo: 'assets/data/film/pharrell-williams/pharrell-williams-happy.mp4',
      fileUrl: ''
    }, {
      id: 19,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/spaceman/nasa_commander_chris_hadfield.jpg',
      artist: 'Chris Hadfield',
      title: "Space Oddity",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/spaceman/space-oddity.mp4',
      fileUrl: ''
    }, {
      id: 20,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/toy-story/toy-story.jpg',
      artist: 'Randy Newman',
      title: "You've Got A Friend In Me (Toy Story)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/toy-story/youve-gota-friend-in-me-randy-newman.mp4',
      fileUrl: ''
    }, {
      id: 21,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/tarzan/tarzan.jpg',
      artist: 'Phil Collins',
      title: "You'll Be In My Heart (Tarzan)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/tarzan/phil-collins-youll-be-in-my-heart.mp4',
      fileUrl: ''
    }, {
      id: 22,
      colour: 'pink',
      genre: 'film & tv',
      image: 'assets/data/film/stevie-wonder/stevie-wonder-ariana-grade-faith-sing.jpg',
      artist: 'Stevie Wonder ft. Ariana Grande',
      title: "Faith (Sing)",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/film/stevie-wonder/stevie-wonder-faith-ft-ariana-grande-video.mp4',
      fileUrl: ''
    }],
    'theatre': [{
      id: 0,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/landing-photo-theatre.jpg',
      artist: '',
      title: 'THEATRE',
      description: '',
      lyricVideo: '',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 1,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/wicked/wicked.png',
      artist: 'Wicked',
      title: 'Defying Gravity',
      description: '',
      lyricVideo: 'assets/data/theatre/wicked/wicked-defying-gravity-lyric-video.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 2,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/my-fair-lady/my-fair-lady.jpg',
      artist: 'My Fair Lady',
      title: "Wouldn't It Be Loverly",
      description: '',
      lyricVideo: 'assets/data/theatre/my-fair-lady/my-fair-lady_wouldnt-it-be-loverly.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 3,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/cats/cats.jpg',
      artist: 'Cats',
      title: "Memory",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/cats/memory.mp4',
      fileUrl: ''
    }, {
      id: 4,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/oliver/oliver.jpg',
      artist: 'Oliver',
      title: "You Gotta Pick A Pocket Or Two",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/oliver/pick-a-pocket-or-two.mp4',
      fileUrl: ''
    }, {
      id: 5,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/phantom/phantom.jpg',
      artist: 'Phantom',
      title: "Phantom Theme",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/phantom/phantom-theme.mp4',
      fileUrl: ''
    }, {
      id: 6,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/christmas-carol/a-christmas-carol-picture.jpg',
      artist: 'A Christmas Carol',
      title: "Thank You Very Much",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/christmas-carol/a-christmas-carol-thank-you-very-much.mp4',
      fileUrl: ''
    }, {
      id: 7,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/fiddler-on-the-roof/fiddler-on-the-roof.jpg',
      artist: 'Fiddler On The Roof',
      title: "If I Were A Rich Man",
      description: '',
      lyricVideo: 'assets/data/theatre/fiddler-on-the-roof/fiddler-on-the-roof-if-i-were-a-rich-man.mp4',
      musicVideo: '',
      fileUrl: ''
    }, {
      id: 8,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/les-miserables/les-miserables.jpg',
      artist: 'Les Miserables',
      title: "Do You Hear The People Sing",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/les-miserables/do-you-hear-the-people-sing-les-miserables-song.mp4',
      fileUrl: ''
    }, {
      id: 9,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/lion-king/the-lion-king.jpg',
      artist: 'The Lion King',
      title: "The Circle Of Life",
      description: '',
      lyricVideo: 'assets/data/theatre/lion-king/the-lion-king-the-circle-of-life-lyric-video.mp4',
      musicVideo: 'assets/data/theatre/lion-king/the-lion-king-the-circle-of-life.mp4',
      fileUrl: ''
    }, {
      id: 10,
      colour: 'green',
      genre: 'theatre',
      image: 'assets/data/theatre/west-side-story/west-side-story.jpg',
      artist: 'West Side Story',
      title: "America",
      description: '',
      lyricVideo: '',
      musicVideo: 'assets/data/theatre/west-side-story/west-side-story-america.mp4',
      fileUrl: ''
    }]
  };

  angular
    .module('jukeboxcomprehension')
    .constant('GENRES', GENRES);
})();

(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();

angular.module('jukeboxcomprehension').run(['$templateCache', function($templateCache) {$templateCache.put('app/components/detail/detail.html','<div class="col-xs-12 col-sm-3"><div class="spacer-5x col-sm-12 hidden-xs">&nbsp;</div><div class="col-xs-12 col-sm-12 song-text blue neon-font"><h2 class=text-wrap>{{detail.selectedSong.artist}}</h2><h2 class=text-wrap>{{detail.trimBrackets(detail.selectedSong.title)}}</h2></div></div><div class="col-xs-12 col-sm-6"><div class="detail-youtube border-glow text-center" ng-class=detail.selectedSong.colour><videogular class=videogular-container><vg-media vg-src=detail.getVideoLink()></vg-media><vg-controls><vg-play-pause-button></vg-play-pause-button><!-- <vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display> --><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><!-- <vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display> --><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button></vg-controls><!-- <vg-overlay-play></vg-overlay-play> --><!-- <vg-poster vg-url=\'controller.config.plugins.poster\'></vg-poster> --></videogular><!-- <video width="100%" height="100%" controls>\n      <source ng-src="{{detail.selectedSong.lyricVideo}}" type="video/mp4">\n    Your browser does not support the video tag. Please use a more modern browser.\n    </video> --></div></div><div class="col-xs-12 col-sm-3"><div class=spacer-2x>&nbsp;</div><div class=text-center><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-if=detail.isLoggedIn() ng-class=detail.selectedSong.colour ng-click="detail.getFileUrl(\'comprehension.pdf\')"><span class="glyphicon glyphicon-star blue"></span> Comprehension <span class="glyphicon glyphicon-star blue"></span> </a><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-if=!detail.isLoggedIn() ng-class=detail.selectedSong.colour ng-click=main.openLogin()><span class="glyphicon glyphicon-star blue"></span> Comprehension <span class="glyphicon glyphicon-star blue"></span></a></div><div class=spacer>&nbsp;</div><div class=text-center ng-if=detail.selectedSong.musicVideo><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour ng-click="detail.videoType = \'music\'"><i class="glyphicon glyphicon-film"></i> Music Video</a></div><div class=spacer>&nbsp;</div><div class=text-center ng-if=detail.selectedSong.lyricVideo><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour ng-click="detail.videoType = \'lyric\'"><i class="glyphicon glyphicon-film"></i> Lyric Video</a></div><div class=spacer-2x>&nbsp;</div><div class=text-center><a class="btn btn-primary btn-lg outline neon-font blue" href=index.html#!/ ><i class="glyphicon glyphicon-home"></i> Home</a></div></div>');
$templateCache.put('app/components/contact/contact.html','<div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Contact Us</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=cc.close()></i></a></div></div><div class=modal-body><h4 class="neon-font blue">Got a question you\u2019d like to ask?</h4><h4 class="neon-font blue">Have a great lesson you\u2019d like to share?</h4><p>We\u2019d love to hear from you. Get in touch and we\u2019ll get back to you as soon as we can.</p><h4><span class="neon-font blue">E-mail:</span> jukeboxcomprehension@gmail.com</h4><h4><span class="neon-font blue">Telephone:</span> 07724 042 186</h4><hr><h4 class="neon-font blue">Metronomics: The Science Behind the Learning</h4><p>A Professional Development course that will help you understand the proven benefits of using songs, lyrics and music to boost achievement and develop the whole child.</p><p>Created to help teachers embed core Literacy skills across the wider curriculum, this course focuses on the fascinating research of Metronomics: the science of how music enables the brain to acquire language quickly and securely.\xA0</p><p>It also looks at the wider benefits of using music and song lyrics in the classroom and explores the best ways in which to use music videos effectively to maximise their impact.</p><p>&nbsp;</p><div class=form-group><a class="btn btn-lg btn-primary btn-lg outline neon-font blue" href=http://www.johnmurraycpd.co.uk/metronomics target=_blank>Find Out More</a></div></div>');
$templateCache.put('app/components/login/login.html','<!-- Modal content--><div class=modal-content><div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Comprehension Lesson</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=lc.close()></i></a></div></div><div class=modal-body><div><h4 class="modal-title neon-font blue">Purchase</h4><p>Access the Comprehension material for this song and artist for just &pound;2</p><img src=/assets/images/paypal.png><p>coming soon ...</p></div><!-- Hide the Login Form --><div ng-hide=true><div ng-if=!lc.isLoggedIn()><!-- \'NOT LOGGED IN\' --><h4 class="modal-title neon-font blue">Login</h4><form name=authForm ng-submit="authForm.$valid && lc.login(lc.user)" class=form-group novalidate><div class=form-group><div class=input-group><!--Email input--> <span class=input-group-addon><i class="glyphicon glyphicon-envelope"></i></span> <input ng-model=lc.user.email ng-model-options="{ updateOn: \'default blur\', debounce: { default: 1000, blur: 0 } }" type=email name=email class=form-control placeholder="Email address" required autofocus><!--Email error--><div ng-show=authForm.$submitted><p ng-show=authForm.email.$error.required class=text-danger>Email required</p><p ng-show=authForm.email.$error.email class=text-danger>Please enter a valid email.</p></div></div></div><div class=form-group><div class=input-group><!--Password input--> <span class=input-group-addon><i class="glyphicon glyphicon-lock"></i></span> <input ng-model=lc.user.password type=password name=password class=form-control placeholder=Password required><!--Password error--><div ng-show=authForm.$submitted><p ng-show=authForm.password.$error.required class=text-danger>Password required</p></div></div></div><div class=form-group><!--Server authentication error--><h1 ng-show=lc.error class=text-danger>The Email or Password is incorrect</h1></div><div class=form-group><button class="btn btn-lg btn-primary btn-lg outline neon-font blue" type=submit>login</button></div></form></div><!-- \'NOT LOGGED IN\' END --></div></div><!-- Modal Body END --></div>');
$templateCache.put('app/components/logout/logout.html','<!-- Modal content--><div class=modal-content><div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Jukebox Comprehension Logout</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=logout.close()></i></a></div></div><div class=modal-body><h4 class="modal-title neon-font blue">Are you sure you want to logout?</h4><div class="form-group spacer"><button class="btn btn-lg btn-primary btn-lg outline neon-font blue" ng-click=logout.logout()>logout</button></div></div><!-- Modal Body END --></div>');
$templateCache.put('app/components/menu/menu.html','<div class="col-sm-3 col-xs-12 genre-container"><div class="spacer-5x hidden-xs">&nbsp;</div><div class="col-xs-12 spacer visible-xs">&nbsp;</div><div class=col-xs-12><h2 class="text-intro neon-font blue hidden-sm hidden-xs">Where music &amp; video improves the mind &amp; nurtures the soul.</h2><h3 class="text-intro neon-font blue hidden-md hidden-lg">Where music &amp; video improves the mind &amp; nurtures the soul.</h3></div></div><div class="col-sm-6 col-xs-12"><div class=border-glow ng-class=menu.genreColour><uib-carousel active=0 no-wrap=false interval=0><uib-slide ng-repeat="song in menu.selectedGenre "><div ng-switch="song.id == 0"><div ng-switch-when=true><div><img width=100% ng-src={{song.image}}></div><div class=text-center ng-class=menu.genreColour style=height:57px;><h2 class="song-title neon-font" style="margin-top:10px;padding-top: 8px;">{{song.title}}</h2></div></div><div ng-switch-default><div><a ng-href=index.html#!/songs/{{song.genre}}/{{song.id}}><img width=100% ng-src={{song.image}}></a></div><div class=text-center ng-class=menu.genreColour><h3 class=song-title>{{song.artist}}</h3><h3 class=song-title>{{song.title}}</h3></div></div></div></uib-slide></uib-carousel></div></div><div class="genre-container col-xs-12 col-sm-3"><div ng-repeat="genreKey in menu.genreKeys"><div class="col-sm-12 col-xs-6 genre-button"><a class="btn btn-primary btn-lg outline neon-font" ng-class=menu.genreColourByKey(genreKey) ng-click=menu.setGenre(genreKey)>{{genreKey}}</a></div></div></div><div class=row><footer class=hidden-xs><div class="col-xs-12 col-sm-3 text-center"><a ng-click=main.openTerms()><span class="neon-font blue">Terms &amp; Conditions</span></a> <span class=divider>&nbsp;</span> <a ng-click=main.openContact()><span class="neon-font blue">Contact</span></a></div><div class="col-xs-12 col-sm-6 text-center neon-font"><span>&copy; {{ main.date | date:\'yyyy\' }} Jukebox Comprehension Ltd</span></div><div class="col-xs-12 col-sm-3 text-center"><a href=https://twitter.com/JBComprehension target=_blank><img src=/assets/images/twitter.png height=30 width=30></a></div></footer><div class=visible-xs><div class=spacer>&nbsp;</div><div class=text-center><a ng-click=main.openTerms()><span class="neon-font blue">Terms &amp; Conditions</span></a> <span class=divider>&nbsp;</span> <a ng-click=main.openPrivacy()><span class="neon-font blue">Privacy</span></a> <span class=divider>&nbsp;</span> <a ng-click=main.openTraining()><span class="neon-font blue">Training</span></a></div><div class=text-center><a href=https://twitter.com/JBComprehension target=_blank><img src=/assets/images/twitter.png height=30 width=30></a></div><div class="text-center neon-font"><span>&copy; {{ main.date | date:\'yyyy\' }} Jukebox Comprehension Ltd</span></div></div></div>');
$templateCache.put('app/components/navbar/navbar.html','<nav class="col-sm-12 header blue"><div class="col-sm-12 text-center"><h1 class=neon-font>Jukebox Comprehension</h1></div></nav>');
$templateCache.put('app/components/terms/terms.html','<div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Terms &amp; Conditions</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=tc.close()></i></a></div></div><div class=modal-body><h2 class="neon-font blue">T\'s & C\'s</h2><div id=terms-content style="overflow:scroll; overflow-x:hidden; height:400px;"><p>The following Terms and Conditions apply to www.jukeboxcomprehension.com and cover all use of the Site. By accessing and using this Site, you confirm that you have read the Term &amp; Conditions in their entirety and accept them in full.</p><p>The Term and Conditions are accessible from the Site at all times.</p><h3 class="neon-font blue">1.\tPrivacy</h3>\xA0<p>Jukebox Comprehension Ltd is committed to protecting your privacy online and will never store or share your personal information with another party. We do not retain credit card details nor do we share any customer details (financial or otherwise) with any third parties.</p><h3 class="neon-font blue">2.\tIntellectual Property Rights</h3><p>2.1.\tAll original materials are the copyright of Jukebox Comprehension Ltd.</p><p>2.2.\tBy downloading any resources from this Site, you agree to the Term and Conditions as stated below.</p>\xA0<p>2.3\tWider use and distribution of original material, including lesson plans and other such works for use outside the classroom setting, namely for conferences and training purposes by individuals or institutions is strictly prohibited without prior consent.</p><p>2.4\tPermission must be obtained before reproducing, publishing or sharing any Original Material for use outside of the classroom.</p><p>2.5. For information on obtaining permission to reproduce or translate Jukebox Comprehension Ltd copyright material,\xA0please contact us directly via our \u201CContact Us\u201D page.</p><p>2.6.\tOriginal works and ideas must be attributed to its source and writer should prior consent be permitted.\xA0</p><p>2.7. The Site, its content as well as all other material including the presentation of the Site (graphics, characters, structure, mapping, titles, photographs, videos, animation, software, music, sounds, banners, advertisements, logos, etc.), hereafter referred to as \u201COriginal Material\u201D, are protected by copyright and associated laws.\xA0</p><p>2.8. In virtue of the aforementioned laws it is strictly forbidden without prior authorization from Jukebox Comprehension Ltd to: (i) reproduce, (ii) adapt, (iii) use, (iv) translate and (v) make available to the public any Original Material. As a consequence the User may not (i) scan, adapt, digitalize or modify, by himself or by a third party, the Original Material (ii) reproduce, by himself or by a third party, the Original Material, in whole or in part, on any type of support (notably books, newspapers, prospectus, advertising leaflets, postcards, CD ROMs or any other electronic supports) in any format (ordinary, deluxe, mass-market, soft back, hardback, in any dimension, in limited edition or not, on disk, cassette, etc.) or (iii) broadcast or authorize the broadcast to the public the Original Material including via audio-visual broadcast or via Internet, etc., without being liable for prosecution for infringement under laws and international conventions.</p><p>2.9. ???</p><h3 class="neon-font blue">3. Responsibility</h3><p>3.1. www.jukeboxcomprehension.com cannot guarantee (i) that the Site will satisfy the specific expectations and demands of the User and (ii) that the Site will continue uninterrupted or free from errors. As such, the User will not hold www.jukeboxcomprehension.com to obligation regarding the performance of the Site.</p><p>3.2. In no case may www.jukebox comprehension.com be held responsible for any direct, indirect or accidental damage resulting from the incorrect use of the Site, or all other software or any connection to periphery hardware.</p><p>3.3. The User or Visitor commits and consents to (i) not disturb or interrupt networks connected to the Site (ii) conform to all rules, login procedures and conduct required on the Internet (iii) not to try to gain unauthorized access to other IT systems and (iv) not to disturb the use and functioning of the Site or of all other similar services.</p><h3 class="neon-font blue">4. Autonomy</h3><p>4.1. If one of the conditions of the present Terms &amp; Conditions is declared null and void or inapplicable, the other conditions remain valid.</p><p>4.2. No party may be presumed to have renounced one or more of the present Terms &amp; Conditions unless the renunciation has been communicated in writing (electronic or not).</p><h3 class="neon-font blue">Disclaimer</h3><p>Jukebox Comprehension Ltd makes no warranties or representations of any kind concerning the accuracy or suitability of the information contained on this web site for any purpose. All such information is provided "as is" and with specific disclaimer of any warranties of merchantability, fitness for purpose, title and/or non-infringement. Jukebox Comprehension Ltd makes no warranties or representations of any kind that the services provided by this web site will be uninterrupted , error-free or that the web site or the server that hosts the web site are free from viruses or other forms of harmful computer code. In no event shall Jukebox Comprehension Ltd, its employees or agents be liable for any direct, indirect or consequential damages resulting from the use of this web site. This exclusion and limitation only applies to the extent permitted by law and is without prejudice to any express provisions to the contrary in any written licence or subscription agreement from Jukebox Comprehension Ltd in respect of the use of any online service provided via this web site.</p><h3 class="neon-font blue">Business Details:</h3><p>If you need to contact us directly then please\xA0email, call or write to us at the following address:</p><h4><span class="neon-font blue">Post:</span></h4><p>Jukebox Comprehension Ltd</p><p>74 Manchester Street</p><p>Manchester</p><p>Heywood</p><p>Ol10 1DL</p><h4><span class="neon-font blue">E-mail:</span> jukeboxcomprehension@gmail.com</h4><h4><span class="neon-font blue">Telephone:</span> 07724 042 186</h4></div></div>');}]);