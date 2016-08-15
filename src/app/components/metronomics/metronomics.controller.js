(function() {
  'use strict';

  angular
    .module('jukeboxcomprehension')
    .controller('MetronomicsController', MetronomicsController);

  /** @ngInject */
  function MetronomicsController($uibModalInstance) {
    var vm = this;
    vm.close = function() {
      $uibModalInstance.dismiss('close');
    };
  }
})();
