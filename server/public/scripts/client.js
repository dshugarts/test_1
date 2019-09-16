const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages', 'angularUtils.directives.dirPagination'])
  .controller('SideNav', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler("left");

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(navID) {
      return debounce(function () {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
  })


  .controller('BasicDemoCtrl', function DemoCtrl($mdDialog, $location) {
    var originatorEv;

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.logout = function() {
      $location.path('home');
    }

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );

      originatorEv = null;
    };

    this.checkVoicemail = function() {
      // This never happens.
    };
  });




/// Routes     ///
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  console.log('myApp -- config')

  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as vm',
    })
    .when('/general_info', {
      templateUrl: '/views/registration_views/general_info.html',
      controller: 'GeneralController as vm',
    })
    .when('/account_info', {
      templateUrl: '/views/registration_views/account_info.html',
      controller: 'GeneralController as vm',
    })
    .when('/contact_info', {
      templateUrl: '/views/registration_views/contact_info.html',
      controller: 'GeneralController as vm',
    })
    .when('/dashboard', {
      templateUrl: '/views/student_views/dashboard.html',
      controller: 'GaugeController as vm',
    })
    .when('/new_dash', {
      templateUrl: '/views/student_views/new_dash.html',
      controller: 'GaugeController as vm',
    })
    .when('/change_password', {
      templateUrl: '/views/student_views/change_password.html',
      controller: 'StudentController as vm',
    })
    .when('/phase_one', {
      templateUrl: '/views/student_views/phase_one.html',
      controller: 'GaugeController as vm',
    })
    .when('/phase_two', {
      templateUrl: '/views/student_views/phase_two.html',
      controller: 'GaugeController as vm',
    })
    .when('/phase_three', {
      templateUrl: '/views/student_views/phase_three.html',
      controller: 'GaugeController as vm',
    })
    .when('/assessments', {
      templateUrl: '/views/student_views/assessments.html',
      controller: 'GaugeController as vm',
    })
    .when('/movement', {
      templateUrl: '/views/student_views/movement.html',
      controller: 'GaugeController as vm',
    })
    .when('/nutrition', {
      templateUrl: '/views/student_views/nutrition.html',
      controller: 'GaugeController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
    
}]);