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
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as vm',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm'
    })
    .when('/student_Appointments', {
      templateUrl: '/views/student_views/student_Appointments.html',
      controller: 'StudentController as vm',
    })
    .when('/general_info', {
      templateUrl: '/views/registration_views/general_info.html',
      controller: 'GeneralController as vm',
    })
    .when('/student_goals', {
      templateUrl: '/views/registration_views/student_goals.html',
      controller: 'SignupController as vm',
    })
    .when('/student_barriers', {
      templateUrl: '/views/registration_views/student_barriers.html',
      controller: 'SignupController as vm',
    })
    .when('/additional_info', {
      templateUrl: '/views/registration_views/additional_info.html',
      controller: 'SignupController as vm',
    })
    .when('/student_home', {
      templateUrl: '/views/student_views/student_home.html',
      controller: 'StudentController as vm',
    })
    .when('/change_password', {
      templateUrl: '/views/student_views/change_password.html',
      controller: 'StudentController as vm',
    })
    .when('/phase_one', {
      templateUrl: '/views/student_views/phase_one.html',
      controller: 'StudentController as vm',
    })
    .when('/phase_two', {
      templateUrl: '/views/student_views/phase_two.html',
      controller: 'StudentController as vm',
    })
    .when('/phase_three', {
      templateUrl: '/views/student_views/phase_three.html',
      controller: 'StudentController as vm',
    })
    .when('/new', {
      templateUrl: '/views/student_views/new.html',
      controller: 'GaugeController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
    
}]);