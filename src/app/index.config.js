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