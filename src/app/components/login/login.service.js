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
