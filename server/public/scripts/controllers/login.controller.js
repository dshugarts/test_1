myApp.controller('LoginController', ['$http', '$location', 'SignupService', function ($http, $location, SignupService) {
  console.log('LoginController created');
  var self = this;
  self.signupService = SignupService;
  self.disclaimer = SignupService.disclaimer;

 

  self.signUp = function() {
    $location.path('/general_info');
  }

}]); // end controller