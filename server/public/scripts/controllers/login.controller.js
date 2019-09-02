myApp.controller('LoginController', ['$http', '$location', 'UserService', 'SignupService', function ($http, $location, UserService, SignupService) {
  console.log('LoginController created');
  var self = this;
  self.userService = UserService;
  self.signupService = SignupService;
  self.id = UserService.userObject.id;
  self.disclaimer = SignupService.disclaimer;

 

  self.signUp = function() {
    $location.path('/general_info');
  }

}]); // end controller