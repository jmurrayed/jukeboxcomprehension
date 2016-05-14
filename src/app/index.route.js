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
            return $filter('filter')(GENRES[$route.current.params.GENRE], { id: $route.current.params.ID });
          }
        }
      })
      .when('/contact', {
        templateUrl: 'app/components/contact/contact.html'
      })
      .when('/', {
        templateUrl: 'app/components/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menu'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }

})();
