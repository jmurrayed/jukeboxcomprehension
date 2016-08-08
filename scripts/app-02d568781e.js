!function(){"use strict";angular.module("jukeboxcomprehension",["ngRoute","ui.bootstrap","ngYoutubeEmbed","firebase"])}(),function(){"use strict";function e(e){var t=this;t.close=function(){e.dismiss("close")}}e.$inject=["$uibModalInstance"],angular.module("jukeboxcomprehension").controller("TermsController",e)}(),function(){"use strict";function e(e){var t=this;t.close=function(){e.dismiss("close")}}e.$inject=["$uibModalInstance"],angular.module("jukeboxcomprehension").controller("PrivacyController",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:e,controllerAs:"nc",bindToController:!0};return t}angular.module("jukeboxcomprehension").directive("navbarHeader",e)}(),function(){"use strict";function e(e,t,o,n,i,r){function a(e){r.setGenre(e),l.selectedGenre=r.getGenre(),l.genreColour=r.getGenreColour(),o.$broadcast("genreColour",l.genreColour)}function s(e){return r.getGenreColourByKey(e)}var l=this;l.genreKeys=r.getGenres(),l.genreColour=r.getGenreColour(),l.selectedGenre=r.getGenre(),l.setGenre=a,l.genreColourByKey=s,n===!0&&t.open({animation:!0,templateUrl:"app/components/logout/logout.html",controller:"LogoutController",controllerAs:"logout"})}e.$inject=["$log","$uibModal","$rootScope","Logout","GENRES","GenreModel"],angular.module("jukeboxcomprehension").controller("MenuController",e)}(),function(){"use strict";function e(e,t,o){var n=this;n.close=function(){return t.close(),e.path("/")},n.logout=function(){return o.logout(),t.close(),e.path("/")}}e.$inject=["$location","$uibModalInstance","loginService"],angular.module("jukeboxcomprehension").controller("LogoutController",e)}(),function(){"use strict";function e(e){function t(e){return i.$signInWithEmailAndPassword(e.email,e.password)}function o(){i.$signOut()}function n(){return i.$getAuth()}var i=e(),r={firebaseAuthObject:i,login:t,logout:o,isLoggedIn:n};return r}e.$inject=["$firebaseAuth"],angular.module("jukeboxcomprehension").factory("loginService",e)}(),function(){"use strict";function e(e,t,o,n){var i=this;i.login=function(e){return n.login(e).then(function(){t.close()})["catch"](function(e){o.error("login failed "+e),i.error=e})},i.close=function(){t.close()},i.isLoggedIn=function(){var e=n.isLoggedIn();return null==e?(i.userInfo=null,!1):(i.userInfo=e,!0)}}e.$inject=["$scope","$uibModalInstance","$log","loginService"],angular.module("jukeboxcomprehension").controller("LoginController",e)}(),function(){"use strict";function e(e,t,o,n,i){var r=this;r.selectedSong=o[0],r.openRegister=function(){n.open({animation:!0,templateUrl:"app/components/register/register.html",controller:"RegisterController",controllerAs:"rc"})},r.isLoggedIn=function(){var e=i.isLoggedIn();return null==e?!1:!0},r.getFileUrl=function(){var e=(new firebase.storage).ref("tasks.pdf");e.getDownloadURL().then(function(e){return t.info("url -> "+e),e})}}e.$inject=["$scope","$log","SelectedSong","$uibModal","loginService"],angular.module("jukeboxcomprehension").controller("DetailController",e)}(),function(){"use strict";function e(e){var t=this;t.close=function(){e.dismiss("close")}}e.$inject=["$uibModalInstance"],angular.module("jukeboxcomprehension").controller("ContactController",e)}(),function(){"use strict";function e(e,t,o){var n=this;n.openContact=function(){e.open({animation:!0,templateUrl:"app/components/contact/contact.html",controller:"ContactController",controllerAs:"cc"})},n.openTerms=function(){e.open({animation:!0,templateUrl:"app/components/terms/terms.html",controller:"TermsController",controllerAs:"tc"})},n.openPrivacy=function(){e.open({animation:!0,templateUrl:"app/components/privacy/privacy.html",controller:"PrivacyController",controllerAs:"pc"})},n.openLogin=function(){e.open({animation:!0,templateUrl:"app/components/login/login.html",controller:"LoginController",controllerAs:"lc",resolve:{items:function(){return[]}}})},n.isLoggedIn=function(){var e=o.isLoggedIn();return null==e?(n.userInfo=null,!1):(n.userInfo=e,!0)}}e.$inject=["$uibModal","$routeParams","loginService"],angular.module("jukeboxcomprehension").controller("MainController",e)}(),function(){var e=function(e){function t(){return Object.keys(e)}function o(t){a=e[t]}function n(){return a[0].colour}function i(t){return e[t][0].colour}function r(){return a}var a=e.rock;return{getGenreColour:n,setGenre:o,getGenre:r,getGenres:t,getGenreColourByKey:i}};e.$inject=["GENRES"],angular.module("jukeboxcomprehension").factory("GenreModel",e)}(),function(){"use strict";function e(e,t){e.when("/songs/:GENRE/:ID/",{templateUrl:"app/components/detail/detail.html",controller:"DetailController",controllerAs:"detail",resolve:{SelectedSong:["$route","$filter","GENRES",function(e,t,o){return t("filter")(o[e.current.params.GENRE],{id:e.current.params.ID})}]}}).when("/logout",{templateUrl:"app/components/menu/menu.html",controller:"MenuController",controllerAs:"menu",resolve:{Logout:function(){return!0}}}).when("/",{templateUrl:"app/components/menu/menu.html",controller:"MenuController",controllerAs:"menu",resolve:{Logout:function(){return!1}}}).otherwise({redirectTo:"/"}),t.html5Mode(!1),t.hashPrefix("!")}e.$inject=["$routeProvider","$locationProvider"],angular.module("jukeboxcomprehension").config(e)}(),function(){"use strict";var e={rock:[{id:1,colour:"red",genre:"rock",image:"assets/data/rock/daughtry/daughtry.jpg",artist:"Daughtry",title:"What About Now",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/rock/daughtry/daughtry_what-about-now.mp4",musicVideo:"",taskUrl:""},{id:2,colour:"red",genre:"rock",image:"assets/data/rock/disturbed/disturbed.jpg",artist:"Disturbed",title:"The Sound Of Silence",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/rock/disturbed/disturbed-the-sound-of-silence.mp4",musicVideo:"",taskUrl:""},{id:3,colour:"red",genre:"rock",image:"assets/data/rock/linkin-park/linkin-park.jpg",artist:"Linkin Park",title:"Castle Of Glass",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/rock/linkin-park/linkin-park_castle-of-glass.mp4",musicVideo:"",taskUrl:""},{id:4,colour:"red",genre:"rock",image:"assets/data/rock/nickelback/nickelback.jpg",artist:"Nickelback",title:"If Everyone Cared",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/rock/nickelback/nickelback-if-everyone-cared.mp4",musicVideo:"",taskUrl:""}],pop:[{id:1,colour:"yellow",genre:"pop",image:"assets/data/pop/a-ha/a-ha.jpg",artist:"A-Ha",title:"Take On Me",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/a-ha/a-ha_take-on-me.mp4",musicVideo:"",taskUrl:"/tasks/1.png"},{id:2,colour:"yellow",genre:"pop",image:"assets/data/pop/jason-mraz/jason-mraz.jpg",artist:"Jason Mraz",title:"I Wont Give Up",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/jason-mraz/jason-mraz_i-won't-give-up.mp4",musicVideo:"",taskUrl:"/tasks/1.png"},{id:3,colour:"yellow",genre:"pop",image:"assets/data/pop/katy-perry/katy-perry.jpg",artist:"Katy Perry",title:"Firework",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/katy-perry/firework-lyric.mp4",musicVideo:"assets/data/pop/katy-perry/firework-music.mp4",taskUrl:"/tasks/1.png"},{id:4,colour:"yellow",genre:"pop",image:"assets/data/pop/kylie/kylie.jpg",artist:"Kylie Minogue",title:"Only You",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/kylie/kylie_only-you.mp4",musicVideo:"",taskUrl:"/tasks/1.png"},{id:5,colour:"yellow",genre:"pop",image:"assets/data/pop/lenka/lenka.jpg",artist:"Lenka",title:"Everything At Once",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/lenka/lenka-everything_at_once.mp4",musicVideo:"",taskUrl:"/tasks/1.png"},{id:6,colour:"yellow",genre:"pop",image:"assets/data/pop/michael-jackson/michael-jackson.jpg",artist:"Michael Jackson",title:"Earth Song",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/michael-jackson/michael_jackson-earthsong.mp4",musicVideo:"",taskUrl:"/tasks/1.png"},{id:7,colour:"yellow",genre:"pop",image:"assets/data/pop/michael-jackson/michael_jackson_1.jpg",artist:"Michael Jackson",title:"Everything At Once",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/pop/michael-jackson/michael_jackson-black_or_white.mp4",musicVideo:"",taskUrl:"/tasks/1.png"}],country:[{id:1,colour:"orange",genre:"country",image:"assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.jpg",artist:"Miranda Lambert",title:"The House That Built Me",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/country/miranda-lambert/miranda_lambert-the_house_that_built_me.mp4",musicVideo:"",taskUrl:""},{id:2,colour:"orange",genre:"country",image:"assets/data/country/kelly-clarkson/kelly-clarkson.jpg",artist:"Kelly Clarkson",title:"Tie It Up",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/country/kelly-clarkson/kelly-clarkson_tie-it-up.mp4",musicVideo:"",taskUrl:""},{id:3,colour:"orange",genre:"country",image:"assets/data/country/tim-mcgraw/tim-mcgraw.jpg",artist:"Tim McGraw",title:"Humble And Kind",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/country/tim-mcgraw/tim-mcgraw_humble-and-kind.mp4",musicVideo:"",taskUrl:""},{id:4,colour:"orange",genre:"country",image:"assets/data/country/carrie-underwood/carrie-underwood.jpg",artist:"Carrie Underwood",title:"Change",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/country/carrie-underwood/carrie_underwood-change.mp4",musicVideo:"",taskUrl:""}],dance:[{id:1,colour:"white",genre:"dance",image:"assets/data/dance/rudimental/rudimental.jpg",artist:"Rudimental",title:"Free",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/dance/rudimental/rudimental-free-music.mp4",musicVideo:"",taskUrl:""},{id:2,colour:"white",genre:"dance",image:"assets/data/dance/avicii/avicii.jpg",artist:"Avicii",title:"Waiting For Love",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/dance/avicii/avicii-waiting-for-love-lyric.mp4",musicVideo:"",taskUrl:""},{id:3,colour:"white",genre:"dance",image:"assets/data/dance/david-guetta/david-guetta.jpg",artist:"David Guetta",title:"Titanium",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/dance/david-guetta/david_guetta-titanium-music.mp4",musicVideo:"",taskUrl:""}],"film & tv":[{id:1,colour:"pink",genre:"film & tv",image:"assets/data/film/anna-kendrick/anna-kendrick.jpg",artist:"Anna Kendrick",title:"Cups (Pitch Perfect)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/anna-kendrick/anna_kendrick-cups.mp4",musicVideo:"",taskUrl:""},{id:2,colour:"pink",genre:"film & tv",image:"assets/data/film/american-idol/kelly-clarkson.jpg",artist:"Kelly Clarkson",title:"Piece By Piece (American Idol)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/american-idol/kelly-clarkson_piece-by-piece.mp4",musicVideo:"",taskUrl:""},{id:3,colour:"pink",genre:"film & tv",image:"assets/data/film/eurovision/joe_and_jake.jpg",artist:"Joe & Jake",title:"You're Not Alone (Eurovision)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/eurovision/joe-and-jake_youre-not-alone.mp4",musicVideo:"",taskUrl:""},{id:4,colour:"pink",genre:"film & tv",image:"assets/data/film/frozen/frozen.jpg",artist:"Idina Menzel",title:"Let It Go (Frozen)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/frozen/frozen_let-it-go.mp4",musicVideo:"",taskUrl:""},{id:5,colour:"pink",genre:"film & tv",image:"assets/data/film/muppets/muppets.jpg",artist:"Muppets",title:"The Giant Crumpet Show (Warburton's Ad)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/muppets/the-muppets_warburtons-ad_the-giant-crumpet-show.mp4",musicVideo:"",taskUrl:""},{id:6,colour:"pink",genre:"film & tv",image:"assets/data/film/david-bowie/labyrinth.jpg",artist:"David Bowie",title:"Magic Dance (Labrynth)",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/film/david-bowie/labyrinth_magic-dance-lyric.mp4",musicVideo:"",taskUrl:""}],theatre:[{id:1,colour:"green",genre:"theatre",image:"assets/data/theatre/wicked/wicked.jpg",artist:"Wicked",title:"Defying Gravity",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/theatre/wicked/wicked-defying-gravity-lyric-video.mp4",musicVideo:"",taskUrl:""},{id:2,colour:"green",genre:"theatre",image:"assets/data/theatre/my-fair-lady/my-fair-lady.jpg",artist:"My Fair Lady",title:"Wouldn't It Be Loverly",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/theatre/my-fair-lady/my-fair-lady_wouldnt-it-be-loverly.mp4",musicVideo:"",taskUrl:""},{id:3,colour:"green",genre:"theatre",image:"assets/data/theatre/cats/cats.jpg",artist:"Cats",title:"Memory",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/theatre/cats/memory.mp4",musicVideo:"",taskUrl:""},{id:4,colour:"green",genre:"theatre",image:"assets/data/theatre/oliver/oliver.jpg",artist:"Oliver",title:"You Gotta Pick A Pocket Or Two",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/theatre/oliver/pick-a-pocket-or-two.mp4",musicVideo:"",taskUrl:""},{id:5,colour:"green",genre:"theatre",image:"assets/data/theatre/phantom/phantom.jpg",artist:"Phantom",title:"Phantom Theme",description:"Place the text in the correct chronological order using key word and context clues.",lyricVideo:"assets/data/theatre/phantom/phantom-theme.mp4",musicVideo:"",taskUrl:""}]};angular.module("jukeboxcomprehension").constant("GENRES",e)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("jukeboxcomprehension").config(e)}(),angular.module("jukeboxcomprehension").run(["$templateCache",function(e){e.put("app/components/contact/contact.html",'<div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Contact Us</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=cc.close()></i></a></div></div><div class=modal-body><h4 class="neon-font blue">Got a question you’d like to ask?</h4><h4 class="neon-font blue">Have a great lesson you’d like to share?</h4><p>Then we’d love to hear from you. Just get in touch and we’ll get back to you as soon as we can.</p><h4><span class="neon-font blue">E-mail:</span> jukeboxcomprehension@gmail.com</h4><h4><span class="neon-font blue">Telephone:</span> 07724042186</h4></div>'),e.put("app/components/detail/detail.html",'<div class=col-sm-3><div class="song-text spacer-3x blue neon-font"><h3 class=text-wrap>{{detail.selectedSong.artist}}</h3><h3 class=text-wrap>{{detail.selectedSong.title}}</h3></div><div class="song-text spacer-3x blue"><h3 class=neon-font>Theme :</h3><h4>{{detail.selectedSong.description}}</h4></div><div class="text-center spacer-5x"><a class="btn btn-primary btn-lg outline neon-font blue" href=index.html#!/ ><i class="glyphicon glyphicon-home"></i> Home</a></div></div><div class=col-sm-6><div class="detail-youtube border-glow spacer-3x" ng-class=detail.selectedSong.colour><video width=100% height=100% controls><source ng-src={{detail.selectedSong.lyricVideo}} type=video/mp4>Your browser does not support the video tag. Please use a more modern browser.</video></div></div><div class=col-sm-3><div class="text-center spacer-3x detail-btn" ng-if=detail.isLoggedIn()><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour target=_blank href="https://firebasestorage.googleapis.com/v0/b/jukebox-temp.appspot.com/o/tasks.pdf?alt=media&token=84a14a0c-cad4-497e-962b-1334225e2939"><i class="glyphicon glyphicon-hand-right"></i> Theme</a></div><div class="text-center spacer-2x"><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour><i class="glyphicon glyphicon-pencil"></i> Comprehension</a></div><div class="text-center spacer-2x"><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour><i class="glyphicon glyphicon-film"></i> Lyric Video</a></div><div class="text-center spacer-2x"><a class="btn btn-primary btn-lg outline neon-font detail-btn" ng-class=detail.selectedSong.colour><i class="glyphicon glyphicon-film"></i> Music Video</a></div></div>'),e.put("app/components/login/login.html",'<!-- Modal content--><div class=modal-content><div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Jukebox Comprehension Account</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=lc.close()></i></a></div></div><div class=modal-body><div><h4 class="modal-title neon-font blue">Annual Membership Fee</h4><p>&pound;48 per school*</p><p>This will gain you full access to the site and associated material for a single academic year (September 1st – August 31st).</p><p>*All subscriptions are calculated from the day of registration to August 31st.</p><p>By registering you agree to the Jukebox Comprehension’s  *Terms &amp; Conditions.</p></div><hr><div ng-if=!lc.isLoggedIn()><!-- \'NOT LOGGED IN\' --><h4 class="modal-title neon-font blue">Login</h4><form name=authForm ng-submit="authForm.$valid && lc.login(lc.user)" class=form-group novalidate><div class=form-group><div class=input-group><!--Email input--> <span class=input-group-addon><i class="glyphicon glyphicon-envelope"></i></span> <input ng-model=lc.user.email ng-model-options="{ updateOn: \'default blur\', debounce: { default: 1000, blur: 0 } }" type=email name=email class=form-control placeholder="Email address" required autofocus><!--Email error--><div ng-show=authForm.$submitted><p ng-show=authForm.email.$error.required class=text-danger>Email required</p><p ng-show=authForm.email.$error.email class=text-danger>Please enter a valid email.</p></div></div></div><div class=form-group><div class=input-group><!--Password input--> <span class=input-group-addon><i class="glyphicon glyphicon-lock"></i></span> <input ng-model=lc.user.password type=password name=password class=form-control placeholder=Password required><!--Password error--><div ng-show=authForm.$submitted><p ng-show=authForm.password.$error.required class=text-danger>Password required</p></div></div></div><div class=form-group><!--Server authentication error--><h1 ng-show=lc.error class=text-danger>The Email or Password is incorrect</h1></div><div class=form-group><button class="btn btn-lg btn-primary btn-lg outline neon-font blue" type=submit>login</button></div></form></div><!-- \'NOT LOGGED IN\' END --></div><!-- Modal Body END --></div>'),e.put("app/components/logout/logout.html",'<!-- Modal content--><div class=modal-content><div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Jukebox Comprehension Logout</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=logout.close()></i></a></div></div><div class=modal-body><h4 class="modal-title neon-font blue">Are you sure you want to logout?</h4><div class="form-group spacer"><button class="btn btn-lg btn-primary btn-lg outline neon-font blue" ng-click=logout.logout()>logout</button></div></div><!-- Modal Body END --></div>'),e.put("app/components/menu/menu.html",'<div class="col-sm-3 genre-container"><div><h2 class="text-intro neon-font blue">Where music &amp; video improves the mind &amp; nurtures the soul.</h2></div><div class="genre-button spacer-5x"><a class="btn btn-primary btn-lg outline neon-font blue" ng-click=main.openContact()><span class="glyphicon glyphicon-account"></span> Contact Us</a></div><div class=genre-button ng-if=!main.isLoggedIn()><a class="btn btn-primary btn-lg outline neon-font blue" ng-click=main.openLogin()><span class="glyphicon glyphicon-account"></span> Login</a></div></div><div class=col-sm-6><div class=border-glow ng-class=menu.genreColour><uib-carousel active=0 no-wrap=false interval=0><uib-slide ng-repeat="song in menu.selectedGenre track by song.id"><div><a ng-href=index.html#!/songs/{{song.genre}}/{{song.id}}><img width=100% ng-src={{song.image}}></a></div><div class=text-center ng-class=menu.genreColour><h3 class=song-title>{{song.artist}} - {{song.title}}</h3></div></uib-slide></uib-carousel></div></div><div class="col-sm-3 genre-container"><div ng-repeat="genreKey in menu.genreKeys"><div class=genre-button><a class="btn btn-primary btn-lg outline neon-font" ng-class=menu.genreColourByKey(genreKey) ng-click=menu.setGenre(genreKey)>{{genreKey}}</a></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="col-sm-12 header blue"><div class="col-sm-12 text-center"><h1 class=neon-font>Jukebox Comprehension</h1></div></nav>'),e.put("app/components/privacy/privacy.html",'<div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Privacy Policy</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=pc.close()></i></a></div></div><div class=modal-body><div id=privacy-content style="overflow:scroll; overflow-x:hidden; height:400px"><p>Jukebox Comprehension Ltd is committed to protecting your privacy online and will never share your contact information with another party. We do not store credit card details nor do we share customer financial details with any third parties.</p><h4 class="neon-font blue">What Information do we collect?</h4><p>When you register with us, we ask you for the following pieces of information: your name, contact address (both email and geographical) and, when necessary, any information that will allow payments to transfer to us securely.</p><h4 class="neon-font blue">How do we use your information?</h4><p>Your personal information may be used to verify that you are the subscriber to the Jukebox Comprehension website.  We also use the information we collect to help us understand more about how our web site is used, to improve our site, and to send you information about us and our products we think will be of interest to you.  Unless you have informed us that you do not wish to receive further information about our products, we will, from time to time, send you mail, both direct and electronically.</p><h4 class="neon-font blue">Do we share information?</h4><p>We will never sell or arbitrarily pass on your personal information to others. If we believe that your use of the site is unlawful or damaging to others, we reserve the right to disclose the information we have obtained through the site about you to the extent that it is reasonably necessary in our opinion to prevent, remedy or take action in relation to such conduct.</p></div></div>'),e.put("app/components/terms/terms.html",'<div class=modal-header><div class=col-sm-11><h3 class="modal-title neon-font blue">Terms &amp; Conditions</h3></div><div class="col-sm-1 text-right"><a><i class="glyphicon glyphicon-remove blue" ng-click=tc.close()></i></a></div></div><div class=modal-body><div id=terms-content style="overflow:scroll; overflow-x:hidden; height:400px"><p>Please read the following Terms &amp; Conditions carefully. They apply to www.jukeboxcomprehension.com and cover all use of the Site. By registering, you confirm that you have read the Terms &amp; Conditions in their entirety and accept them in full.</p><p>The Terms &amp; Conditions are accessible from the Site at all times and we suggest you print and retain a copy for your personal records.</p><h3 class="neon-font blue">1. Personal Information</h3><p>1.1. By registering on the Site and in completing the Registration Form, the User agrees to provide correct, precise and complete personal information to www.jukeboxcomprehension.com. If there are any changes to this personal information the User will update the details held by www.jukeboxcomprehension.com to ensure that they remain correct, complete and up-to-date.</p><p>1.2. The User agrees not to use another person’s identity or to use a false name. If some of the information provided by the User is false or imprecise, www.jukeboxcomprehension.com reserves the right to suspend or cancel access to the Site.</p><p>1.3. All personal information is treated and held by www.jukeboxcomprehension.com in the strictest of confidence and in accordance with both our Privacy Policy and UK law.</p><h3 class="neon-font blue">2. The User’s Account, Password and Security</h3><p>2.1. When registering, the User will be provided with a Username and a Password that will remain private and exclusive to the User. Your Username and Password grant access to all areas of the Site. When logging in to restricted areas of the Site the User must provide the assigned Username and Password.</p><p>2.2. The User accepts that the provision of their Username and Password are the means by which they prove their identity.</p><p>2.3. In the case of forgetting their Password, the User may go on the Site and request to receive it by clicking on the Contact Us page or sending us an email direct.</p><p>2.4. On completion of the Registration Form and subsequent payment of the Annual Membership Fee, the User will gain access to the Site for a twelve month period starting on September the 1st to the period up until August the 31st for the current year. On expiry of this time period, a renewal charge for the Annual Membership Fee will be requested to the User’s account. Upon receiving payment, this will result in the User being granted access to the Site for a further twelve months.</p><p>2.5. Approximately one month prior to the end of your subscription the User will receive an email notification from us, advising that the subscription will need to be renewed.</p><p>2.6. The twelve month Membership Fee will be collected annually on September 1st. Should membership be requested prior to this date, the Annual Membership Fee will still apply and will need to be paid by the User to \'Jukebox Comprehension Ltd\' before subsequent access to the site is accepted.</p><p>2.7. The User has the right to cease membership at any time within any twelve month period but will not be eligible to receive a refund or any other remuneration when doing so.</p><p>2.8. Should the Annual Membership Fee be altered in any way from that charged upon initial registration; www.jukeboxcomprehension.com will inform the User one month prior to the renewal of their membership. This will be communicated electronically.</p><p>2.9a. The User is fully responsible for the confidentiality of their Username and Password and www.jukeboxcomprehension.com may not in any case be held responsible for any use of their Username and Password by third parties. The User is authorized to allow all members situated at the same address the use of their account.</p><p>2.9b. The User must immediately inform www.jukeboxcomprehension.com by E-mail of (i) any unauthorized use of their E-mail address and Password and (ii) any resulting security breaches.</p><h3 class="neon-font blue">3. Modification and Suspension</h3><p>3.1. www.jukeboxcomprehension.com may, at any time, modify or suspend part of the Site without incurring any liability. 3.2. Unless for reasons of urgent work, www.jukeboxcomprehension.com will notify the User of any planned maintenance work or of any alteration or suspension of the Site. www.jukeboxcomprehension.com will try to carry out all such maintenance work outside of normal working hours (9 a.m. - 6 p.m., Monday to Friday) and will try to ensure minimum disruption for the User.</p><h3 class="neon-font blue">4. Intellectual Property Rights</h3><p>4.1. All original materials on the Site are the copyright of Jukebox Comprehension Ltd.</p><p>4.2. The Site, its content as well as all other material including the presentation of the Site (graphics, characters, structure, mapping, titles, photographs, videos, animation, software, music, sounds, banners, advertisements, logos, etc.), hereafter referred to as “Original Material”, are protected by copyright and associated laws.</p><p>4.3. In virtue of the aforementioned laws it is strictly forbidden without prior authorization from Jukebox Comprehension Ltd to: (i) reproduce, (ii) adapt, (iii) use, (iv) translate and (v) make available to the public any Original Material. As a consequence the User may not (i) scan, adapt, digitalize or modify, by himself or by a third party, the Original Material (ii) reproduce, by himself or by a third party, the Original Material, in whole or in part, on any type of support (notably books, newspapers, prospectus, advertising leaflets, postcards, CD ROMs or any other electronic supports) in any format (ordinary, deluxe, mass-market, soft back, hardback, in any dimension, in limited edition or not, on disk, cassette, etc.) or (iii) broadcast or authorize the broadcast to the public the Original Material including via audio-visual broadcast or via Internet, etc., without being liable for prosecution for infringement under laws and international conventions.</p><p>4.4. Permission to reproduce any Original Material for use outside the classroom and for non-educational purposes must be obtained before publication.</p><p>4.5. For information on obtaining permission to reproduce or translate Jukebox Comprehension Ltd copyright material, please contact us directly via our “Contact Us” page.</p><h3 class="neon-font blue">5. Responsibility</h3><p>5.1. www.jukeboxcomprehension.com cannot guarantee (i) that the Site will satisfy the specific expectations and demands of the User and (ii) that the Site will continue uninterrupted or free from errors. As such, the User will not hold www.jukeboxcomprehension.com to obligation regarding the performance of the Site.</p><p>5.2. In no case may www.jukebox comprehension.com be held responsible for any direct, indirect or accidental damage resulting from the incorrect use of the Site, or all other software or any connection to periphery hardware.</p><p>5.3. The User or Visitor commits and consents to: - Not disturb or interrupt networks connected to the Site - Conform to all rules, login procedures, and conduct required on the Internet - Not to try to gain unauthorized access to other IT systems - Not to disturb the use and functioning of the Site or of all other similar services</p><h3 class="neon-font blue">6. Autonomy</h3><p>6.1. If one of the conditions of the present Terms &amp; Conditions is declared null and void or inapplicable, the other conditions remain valid. 6.2. No party may be presumed to have renounced one or more of the present Terms &amp; Conditions unless the renunciation has been communicated in writing (electronic or not).</p><h3 class="neon-font blue">Disclaimer:</h3><p>Jukebox Comprehension Ltd makes no warranties or representations of any kind concerning the accuracy or suitability of the information contained on this web site for any purpose. All such information is provided "as is" and with specific disclaimer of any warranties of merchantability, fitness for purpose, title and/or non-infringement. Jukebox Comprehension Ltd makes no warranties or representations of any kind that the services provided by this web site will be uninterrupted , error-free or that the web site or the server that hosts the web site are free from viruses or other forms of harmful computer code. In no event shall Jukebox Comprehension Ltd, its employees or agents be liable for any direct, indirect or consequential damages resulting from the use of this web site. This exclusion and limitation only applies to the extent permitted by law and is without prejudice to any express provisions to the contrary in any written licence or subscription agreement from Jukebox Comprehension Ltd in respect of the use of any online service provided via this web site.</p><h3 class="neon-font blue">Business Details:</h3><p>If you need to contact us directly then you can use either the Contact Us page or write to us at the following address:</p><p>Jukebox Comprehension Ltd</p><p>74 Manchester Street</p><p>Manchester</p><p>Heywood</p><p>Ol10 1DL</p></div></div>');
}]);
//# sourceMappingURL=../maps/scripts/app-02d568781e.js.map
