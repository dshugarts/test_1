myApp.controller('LoginController', ['$http', '$location', 'SignupService', function ($http, $location, SignupService) {
  console.log('LoginController created');
  var self = this;
  self.signupService = SignupService;
  self.disclaimer = SignupService.disclaimer;

 

  self.signUp = function() {
    $location.path('/general_info');
  }

  self.dash = function() {
    Swal.fire({
        title: 'Your Daily Stress Indicator is Red',
        text: 'Today your session effort should be at Level 1',
        imageUrl: './images/emptyfuel.png',
        imageWidth: 102,
        imageHeight: 102,
        imageAlt: 'Custom image',
        animation: true
      })
    $location.path('/new_dash');
}


}]); // end controller